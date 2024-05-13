import { useContext } from 'react';
import { fetchCars } from 'utils/garageUtils';
import GarageContext from './context/GarageContext';
import MainContext from './context/MainContext';

const handlePrevPage: HandlePageSwitch = (
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

const handleNextPage: HandlePageSwitch = (
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

const Pagination = ({ view, limit, total }: PaginationProps) => {
  const { setCars, setError } = useContext(GarageContext);
  const { currentPage, setCurrentPage, setTotalItems } = useContext(MainContext);
  const page = currentPage[view as keyof CurrentPage];
  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <button
        type="button"
        onClick={() => handlePrevPage(page, view, setCurrentPage, setCars, setError, setTotalItems)}
        disabled={page === 1}
      >
        prev
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button
        type="button"
        onClick={() => handleNextPage(page, view, setCurrentPage, setCars, setError, setTotalItems)}
        disabled={page === totalPages}
      >
        next
      </button>
    </>
  );
};

export default Pagination;
