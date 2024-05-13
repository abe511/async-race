import { createContext } from 'react';

type WinnersContextProps = {
  winners: WinnerData[];
  setWinners: SetState;
};

const WinnersContext = createContext<WinnersContextProps>({
  winners: [],
  setWinners: () => {},
});

export default WinnersContext;
