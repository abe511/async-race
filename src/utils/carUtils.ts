import { engineControl } from 'api/garageApi';

// try to start
// if failed to start - stop (don't move at all)
// else - start animation (move) with provided time (cover 100% of the distance in given time)
// send drive request
// if engine fails - pause animation (stop in place)
// else - continue moving
export const handleStart: HandleStart = async (id, setCars, setError) => {
  try {
    setError('');
    setCars((prev: CarData[]) =>
      prev.map((car) => (car.id === id ? { ...car, status: 'start' } : car))
    );
    const engineData = (await engineControl(id, 'started')) as EngineData;
    if (!engineData) {
      setCars((prev: CarData[]) =>
        prev.map((car) => (car.id === id ? { ...car, status: 'stop' } : car))
      );
      throw new Error('Failed to start engine');
    }
    setCars((prev: CarData[]) =>
      prev.map((car) =>
        car.id === id
          ? { ...car, status: 'move', time: engineData.distance / engineData.velocity }
          : car
      )
    );
    const drive = (await engineControl(id, 'drive')) as EngineStatus;
    if (drive && !drive.success) {
      setCars((prev: CarData[]) =>
        prev.map((car) => (car.id === id ? { ...car, status: 'pause' } : car))
      );
      throw new Error('Engine failure');
    }
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

// set to intermediary state ('stopping') to disable the STOP button
// if 'stopped' request is ok - stop and return to initial place
export const handleStop: HandleStop = async (id, setCars, setError) => {
  try {
    setError('');
    setCars((prev: CarData[]) =>
      prev.map((car) => (car.id === id ? { ...car, status: 'stopping' } : car))
    );
    const engineData = await engineControl(id, 'stopped');
    if (!engineData) {
      throw new Error('Failed to stop engine');
    }
    setCars((prev: CarData[]) =>
      prev.map((car) => (car.id === id ? { ...car, status: 'stop' } : car))
    );
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};
