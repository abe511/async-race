import { getAllCars } from 'api/garageApi';
import { getWinners, createWinner, updateWinnerData, deleteWinnerData } from 'api/winnersApi';
import { defaultWinnerData } from 'constants/appData';

// get current page winners and ALL cars from the server
// create a hashmap for all cars - {id: {id, name, color}}
// add name and color (or default) properties to current page winners with matching indices
// set winners to local data
export const fetchWinners: FetchWinners = async (
  page,
  setWinners,
  setError,
  setTotalItems,
  sort,
  order
) => {
  try {
    const data = await getWinners(page, setTotalItems, sort, order);
    if (!data.length) {
      throw new Error('No winner data');
    }

    const allCars = await getAllCars();
    const carsMap: CarsMap = {};
    if (allCars.length) {
      allCars.forEach((car) => {
        carsMap[car.id] = { ...car };
      });
    }

    const localData: WinnerData[] = data.map((winner) => {
      const { name, color } = carsMap[winner.id] || defaultWinnerData;
      return { ...winner, name, color };
    });

    setWinners(localData);
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

// extract id, time, wins from new data to create a new winner
// add a winner with name and color locally
export const addWinner: AddWinner = async (addedWinner, setWinners, setError) => {
  try {
    const { id, time, wins } = addedWinner;
    const newWinner = await createWinner({ id, time, wins });
    if (!newWinner) {
      throw new Error('Failed to create a winner');
    }
    setWinners((prev: WinnerData[]) => [...prev, addedWinner]);
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

// extract id, time, wins from new data to update an existing winner
// update a locally existing winner with new data including name and color
export const updateWinner: UpdateWinner = async (updatedWinner, setWinners, setError) => {
  try {
    const { id, time, wins } = updatedWinner;
    const data = await updateWinnerData({ id, time, wins });
    if (!data) {
      throw new Error('Failed to update the winner');
    }
    setWinners((prev: WinnerData[]) =>
      prev.map((winner) =>
        winner.id === updatedWinner.id ? { ...winner, ...updatedWinner } : winner
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

export const removeWinner: RemoveWinner = async (id, setError) => {
  try {
    const data = await deleteWinnerData(id);
    if (!data) {
      throw new Error('Failed to remove the winner');
    }
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

// if winner exists - update with best time and incremented win
// if no such winner - create one with provided time and win=1
export const updateWinnersList: UpdateWinnersList = (winners, newWinner, setWinners, setError) => {
  const newTime = newWinner.time / 1000;
  const existingWinner = winners.filter((winner: WinnerData) => winner.id === newWinner.id)[0];
  if (existingWinner) {
    const bestTime = existingWinner.time > newTime ? newTime : existingWinner.time;
    const updatedWinner = { ...newWinner, time: bestTime, wins: existingWinner.wins + 1 };
    updateWinner(updatedWinner, setWinners, setError);
  } else {
    const addedWinner = { ...newWinner, time: newTime, wins: 1 };
    addWinner(addedWinner, setWinners, setError);
  }
};
