import { createContext } from 'react';

type WinnersContextProps = {
  winners: WinnerData[];
  setWinners: SetState;
  sort: SortOrder;
  setSort: SetState;
};

const WinnersContext = createContext<WinnersContextProps>({
  winners: [],
  setWinners: () => {},
  sort: { column: 'wins', order: 'DESC' },
  setSort: () => {},
});

export default WinnersContext;
