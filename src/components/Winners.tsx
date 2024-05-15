import { useEffect, useContext } from 'react';
import { winnersPageLimit } from 'utils/data';
import { fetchWinners } from 'utils/winnersUtils';
import MainContext from './context/MainContext';
import GarageContext from './context/GarageContext';
import WinnersContext from './context/WinnersContext';
import Title from './Title';
import CarImage from './car/CarImage';
import Pagination from './Pagination';

const tableHeaders = () => {
  const headers = ['NO', 'CAR', 'NAME', 'WINS', 'BEST TIME (SECONDS)'];
  return headers.map((header) => <th key={header}>{header}</th>);
};

const tableRows = (winners: WinnerData[]) => {
  return winners.map((winner) => {
    return (
      <tr key={winner.id}>
        <td>{winner.id}</td>
        <td>
          <CarImage stroke={winner.color} />
        </td>
        <td>{winner.name}</td>
        <td>{winner.wins}</td>
        <td>{winner.time}</td>
      </tr>
    );
  });
};

const Winners = () => {
  const { setError } = useContext(GarageContext);
  const { currentPage, totalItems, setTotalItems } = useContext(MainContext);
  const { winners, setWinners } = useContext(WinnersContext);
  useEffect(() => {
    fetchWinners(currentPage.winners, setWinners, setError, setTotalItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage.winners]);

  return (
    <>
      <Title title="WINNERS" total={totalItems.winners} />
      <table>
        <thead>
          <tr>{tableHeaders()}</tr>
        </thead>
        <tbody>{tableRows(winners)}</tbody>
      </table>
      <Pagination view="winners" limit={winnersPageLimit} total={totalItems.winners} />
    </>
  );
};

export default Winners;
