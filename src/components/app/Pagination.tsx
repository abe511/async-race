import { useContext } from 'react';
import { PaginationContainer, PageButton, PageInfo } from 'components/app/Pagination.styled';
import { handlePrevPage, handleNextPage } from 'utils/pageUtils';
import GarageContext from '../context/GarageContext';
import MainContext from '../context/MainContext';

const Pagination = ({ view, limit, total }: PaginationProps) => {
  const { setCars, setError } = useContext(GarageContext);
  const { currentPage, setCurrentPage, setTotalItems } = useContext(MainContext);
  const page = currentPage[view as keyof CurrentPage];
  const totalPages = Math.ceil(total / limit);

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => handlePrevPage(page, view, setCurrentPage, setCars, setError, setTotalItems)}
        disabled={page === 1}
      >
        prev
      </PageButton>
      <PageInfo>
        {page} / {totalPages}
      </PageInfo>
      <PageButton
        onClick={() => handleNextPage(page, view, setCurrentPage, setCars, setError, setTotalItems)}
        disabled={page === totalPages}
      >
        next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
