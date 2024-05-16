import { fetchCars } from 'utils/garageUtils';

export const handlePrevPage: HandlePageSwitch = (
  page,
  view,
  setCurrentPage,
  setCars,
  setError,
  setTotalItems
) => {
  setCurrentPage((prev: CurrentPage) => ({ ...prev, [view]: prev[view as keyof CurrentPage] - 1 }));
  if (view === 'garage') {
    fetchCars(page, setCars, setError, setTotalItems);
  } else if (view === 'winners') {
    // fetchWinners();
  }
};

export const handleNextPage: HandlePageSwitch = (
  page,
  view,
  setCurrentPage,
  setCars,
  setError,
  setTotalItems
) => {
  setCurrentPage((prev: CurrentPage) => ({ ...prev, [view]: prev[view as keyof CurrentPage] + 1 }));

  if (view === 'garage') {
    fetchCars(page, setCars, setError, setTotalItems);
  } else if (view === 'winners') {
    // fetchWinners();
  }
};
