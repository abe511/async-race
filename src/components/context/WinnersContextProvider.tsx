import { useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import WinnersContext from './WinnersContext';

const WinnersContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [winners, setWinners] = useLocalStorage('winners', []);

  return (
    <WinnersContext.Provider
      value={useMemo(() => {
        return {
          winners,
          setWinners,
        };
      }, [winners, setWinners])}
    >
      {children}
    </WinnersContext.Provider>
  );
};

export default WinnersContextProvider;
