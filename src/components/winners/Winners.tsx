import { useEffect, useContext } from 'react';
import { winnersPageLimit } from 'constants/appData';
import { fetchWinners } from 'utils/winnersUtils';
import { AngleUpIcon, AngleDownIcon } from 'components/icons/WinnersIcons';
import MainContext from '../context/MainContext';
import GarageContext from '../context/GarageContext';
import WinnersContext from '../context/WinnersContext';
import ViewTitle from '../app/ViewTitle';
import CarImage from '../garage/car/CarImage';
import Pagination from '../app/Pagination';

const handleSort = (column: string, setSort: SetState) => {
  setSort((prev: SortOrder) => ({
    column,
    order: prev.order === 'DESC' ? 'ASC' : 'DESC',
  }));
};

const tableHeaders = (sort: SortOrder, setSort: SetState) => {
  const headers = ['№', 'CAR', 'NAME', 'WINS', 'BEST TIME'];
  return headers.map((header) => {
    if (header === 'WINS')
      return (
        <th key={header} onClick={() => handleSort('wins', setSort)}>
          <span>WINS</span>
          {sort.column === 'wins' &&
            (sort.order === 'ASC' ? (
              <AngleUpIcon fill="" stroke="" width={24} height={24} disabled={false} />
            ) : (
              <AngleDownIcon fill="" stroke="" width={24} height={24} disabled={false} />
            ))}
        </th>
      );
    if (header === 'BEST TIME')
      return (
        <th key={header} onClick={() => handleSort('time', setSort)}>
          <span>BEST TIME</span>
          {sort.column === 'time' &&
            (sort.order === 'ASC' ? (
              <AngleUpIcon fill="" stroke="" width={24} height={24} disabled={false} />
            ) : (
              <AngleDownIcon fill="" stroke="" width={24} height={24} disabled={false} />
            ))}
        </th>
      );
    return <th key={header}>{header}</th>;
  });
};

const tableRows = (winners: WinnerData[]) => {
  return winners.map((winner) => {
    return (
      <tr key={winner.id}>
        <td>{winner.id}</td>
        <td>
          <CarImage stroke={winner.color} status="stop" time={winner.time} />
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
  const { winners, setWinners, sort, setSort } = useContext(WinnersContext);

  useEffect(() => {
    fetchWinners(currentPage.winners, setWinners, setError, setTotalItems, sort.column, sort.order);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage.winners, sort.column, sort.order]);

  return (
    <>
      <ViewTitle title="WINNERS" total={totalItems.winners} />
      <table>
        <thead>
          <tr>{tableHeaders(sort, setSort)}</tr>
        </thead>
        <tbody>{tableRows(winners)}</tbody>
      </table>
      <Pagination view="winners" limit={winnersPageLimit} total={totalItems.winners} />
    </>
  );
};

export default Winners;
