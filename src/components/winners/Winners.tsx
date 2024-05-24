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
import { Table, Header, Row, Cell } from './Winners.styled';

const handleSort = (column: string, setSort: SetState) => {
  setSort((prev: SortOrder) => ({
    column,
    order: prev.order === 'DESC' ? 'ASC' : 'DESC',
  }));
};

const tableHeaders = (sort: SortOrder, setSort: SetState) => {
  const headers = ['Nº', 'CAR', 'NAME', 'WINS', 'BEST TIME'];
  return headers.map((header) => {
    if (header === 'WINS')
      return (
        <Header className="sort-column" key={header} onClick={() => handleSort('wins', setSort)}>
          <span>WINS</span>
          {sort.column === 'wins' &&
            (sort.order === 'ASC' ? (
              <AngleUpIcon width="1rem" height="1rem" className="sort-icon-position" />
            ) : (
              <AngleDownIcon width="1rem" height="1rem" className="sort-icon-position" />
            ))}
        </Header>
      );
    if (header === 'BEST TIME')
      return (
        <Header key={header} onClick={() => handleSort('time', setSort)}>
          <span className="sort-column">BEST TIME</span>
          {sort.column === 'time' &&
            (sort.order === 'ASC' ? (
              <AngleUpIcon width="1rem" height="1rem" className="sort-icon-position" />
            ) : (
              <AngleDownIcon width="1rem" height="1rem" className="sort-icon-position" />
            ))}
        </Header>
      );
    return <Header key={header}>{header}</Header>;
  });
};

const tableRows = (winners: WinnerData[]) => {
  return winners.map((winner) => {
    return (
      <Row key={winner.id}>
        <Cell>{winner.id}</Cell>
        <Cell>
          <CarImage stroke={winner.color} status="stop" time={winner.time} />
        </Cell>
        <Cell>{winner.name}</Cell>
        <Cell>{winner.wins}</Cell>
        <Cell>{winner.time}</Cell>
      </Row>
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
      <Table>
        <thead>
          <Row>{tableHeaders(sort, setSort)}</Row>
        </thead>
        <tbody>{tableRows(winners)}</tbody>
      </Table>
      <Pagination view="winners" limit={winnersPageLimit} total={totalItems.winners} />
    </>
  );
};

export default Winners;
