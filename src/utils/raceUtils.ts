import { engineControl } from 'api/garageApi';

export const setCarStatus = (id: number, setCars: SetCars, carData: CarStatus) => {
  setCars((prev: CarData[]) => prev.map((car) => (car.id === id ? { ...car, ...carData } : car)));
};

export const showWinner = async (
  cars: CarData[],
  results: PromiseSettledResult<RaceResults>[],
  setCars: SetCars,
  setWinnerModalData: SetState
) => {
  const fastestCar = { id: -1, time: Infinity };
  results.forEach((result) => {
    if (result.status === 'fulfilled' && result.value.time < fastestCar.time) {
      fastestCar.id = result.value.id;
      fastestCar.time = result.value.time;
    }
  });

  const winner = cars.filter((car: CarData) => car.id === fastestCar.id);
  if (!winner.length) {
    setWinnerModalData({ open: true, id: -1, name: '', time: Infinity });

    return;
  }
  setCars((prev: CarData[]) =>
    prev.map((car) => {
      if (car.id === winner[0].id) {
        let newBestTime = fastestCar.time;
        if (car.bestTime && car.bestTime < fastestCar.time) {
          newBestTime = car.bestTime;
        }
        const update = { wins: car.wins ? car.wins + 1 : 1, bestTime: newBestTime };
        return { ...car, ...update };
      }
      return car;
    })
  );
  setWinnerModalData({ open: true, id: winner[0].id, name: winner[0].name, time: fastestCar.time });
};

export const raceRequests = (cars: CarData[], setCars: SetCars, raceStartTime: number) => {
  return cars.map(async (currentCar) => {
    let carStartTime = 0;
    let carFinishTime = Infinity; // default finish time
    let carTravelTime = 0;
    try {
      // get engine data for current car
      const engineData = (await engineControl(currentCar.id, 'started')) as EngineData;
      if (!engineData) throw new Error('Failed to start the engine');

      carTravelTime = Math.floor(engineData.distance / engineData.velocity);
      const carData = { status: 'move', time: carTravelTime };
      setCarStatus(currentCar.id, setCars, carData);
      carStartTime = Date.now(); // the moment status is changed and the car starts moving
      if (carData.status === 'move') carFinishTime = carStartTime - raceStartTime + carTravelTime; // on valid engineData response, estimated finish time = response delay + race duration
      // get drive status
      const driveStatus = (await engineControl(currentCar.id, 'drive')) as EngineStatus;
      if (driveStatus && !driveStatus.success) throw new Error('Engine failure');

      return await Promise.resolve({ id: currentCar.id, time: carFinishTime });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Failed to start the engine')
          setCarStatus(currentCar.id, setCars, { status: 'stop' });
        if (error.message === 'Engine failure') {
          setCarStatus(currentCar.id, setCars, { status: 'pause' });
          // on engine failure after finish - actual time is returned
          if (Date.now() - carStartTime > carTravelTime)
            return Promise.resolve({ id: currentCar.id, time: carFinishTime });
        }
        return Promise.reject(error.message);
      }
      return Promise.reject(new Error('Unknown error'));
    }
  });
};

export const handleRace = async (
  cars: CarData[],
  setCars: SetCars,
  setError: SetError,
  setWinnerModalData: SetState
) => {
  setError('');
  const raceStartTime = Date.now(); // 'RACE' button click
  try {
    setCars((prev: CarData[]) => prev.map((car: CarData) => ({ ...car, status: 'start' })));
    const requests = raceRequests(cars, setCars, raceStartTime);
    const raceResponses: PromiseSettledResult<RaceResults>[] = await Promise.allSettled(requests);
    // SHOW THE WINNER
    showWinner(cars, raceResponses, setCars, setWinnerModalData);
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

export const handleReset = async (cars: CarData[], setCars: SetCars, setError: SetError) => {
  try {
    setError('');
    setCars((prev: CarData[]) => prev.map((car: CarData) => ({ ...car, status: 'stop' })));
    await Promise.allSettled(
      cars.map(async (currentCar: CarData) => {
        const engineData = (await engineControl(currentCar.id, 'stopped')) as EngineData;
        if (!engineData) {
          throw new Error('Failed to reset a car');
        }
        return engineData;
      })
    );
  } catch (error) {
    setError('Failed to reset');
  }
};
