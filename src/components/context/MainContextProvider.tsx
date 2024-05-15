import { useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import MainContext from './MainContext';

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useLocalStorage('RACE_page', { garage: 1, winners: 1 });
  const [totalItems, setTotalItems] = useLocalStorage('RACE_items', { cars: 0, winners: 0 });
  const [winnerModalData, setWinnerModalData] = useLocalStorage('RACE_winnerModal', {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [winnerModalData, currentPage, totalItems])}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
