import { useEffect, useContext } from 'react';
import { garagePageLimit } from 'constants/appData';
import { fetchWinners } from 'utils/winnersUtils';
import MainContext from '../context/MainContext';
import GarageContext from '../context/GarageContext';
import Dashboard from './dashboard/Dashboard';
import ViewTitle from '../app/ViewTitle';
import Track from './Track';
import Pagination from '../app/Pagination';
import WinnerModal from './WinnerModal';
import WinnersContext from '../context/WinnersContext';

const Garage = () => {
  const { fetchCars, setCars, setError } = useContext(GarageContext);
  const { currentPage, totalItems, setTotalItems } = useContext(MainContext);
  const { winners, setWinners, sort } = useContext(WinnersContext);
  const { column, order } = sort;

  useEffect(() => {
    fetchCars(currentPage.garage, setCars, setError, setTotalItems);
    if (winners.length === 0) {
      fetchWinners(currentPage.winners, setWinners, setError, setTotalItems, column, order);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <ViewTitle title="GARAGE" total={totalItems.cars} />
      <WinnerModal />
      <Dashboard />
      <Track />
      <Pagination view="garage" limit={garagePageLimit} total={totalItems.cars} />
    </>
  );
};

export default Garage;
