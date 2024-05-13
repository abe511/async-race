import { useState, useMemo } from 'react';
import WinnersContext from './WinnersContext';

const WinnersContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [winners, setWinners] = useState<WinnerData[]>([]);

  return (
    <WinnersContext.Provider
      value={useMemo(() => {
        return {
          winners,
          setWinners,
        };
      }, [winners])}
    >
      {children}
    </WinnersContext.Provider>
  );
};

export default WinnersContextProvider;
