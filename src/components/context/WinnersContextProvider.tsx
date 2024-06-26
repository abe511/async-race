import { useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import WinnersContext from './WinnersContext';

const WinnersContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [winners, setWinners] = useLocalStorage('RACE_winners', []);
  const [sort, setSort] = useLocalStorage('RACE_sort', { column: 'wins', order: 'DESC' });

  return (
    <WinnersContext.Provider
      value={useMemo(() => {
        return {
          winners,
          setWinners,
          sort,
          setSort,
        };
      }, [winners, setWinners, sort, setSort])}
    >
      {children}
    </WinnersContext.Provider>
  );
};

export default WinnersContextProvider;
