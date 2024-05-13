import { useState, useMemo } from 'react';
import MainContext from './MainContext';

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>({ garage: 1, winners: 1 });
  const [totalItems, setTotalItems] = useState({ cars: 0, winners: 0 });
  const [winnerModalData, setWinnerModalData] = useState<WinnerModal>({
    isOpen: false,
    id: -1,
    name: '',
    time: Infinity,
  });

  return (
    <MainContext.Provider
      value={useMemo(() => {
        return {
          winnerModalData,
          setWinnerModalData,
          currentPage,
          setCurrentPage,
          totalItems,
          setTotalItems,
        };
      }, [winnerModalData, currentPage, totalItems])}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
