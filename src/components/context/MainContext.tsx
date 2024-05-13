import { createContext } from 'react';

type MainContextProps = {
  currentPage: CurrentPage;
  setCurrentPage: SetState;
  winnerModalData: WinnerModal;
  setWinnerModalData: SetState;
  totalItems: TotalItems;
  setTotalItems: SetState;
};

const MainContext = createContext<MainContextProps>({
  currentPage: { garage: 1, winners: 1 },
  setCurrentPage: () => {},
  winnerModalData: {
    isOpen: false,
    id: -1,
    name: '',
    time: Infinity,
  },
  setWinnerModalData: () => {},
  totalItems: { cars: 0, winners: 0 },
  setTotalItems: () => {},
});

export default MainContext;
