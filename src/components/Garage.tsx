import { useEffect, useContext } from 'react';
import { garagePageLimit } from 'utils/data';
import MainContext from './context/MainContext';
import GarageContext from './context/GarageContext';
import Dashboard from './dashboard/Dashboard';
import Title from './Title';
import Track from './Track';
import Pagination from './Pagination';
import WinnerModal from './WinnerModal';

const Garage = () => {
  const { fetchCars, setCars, setError } = useContext(GarageContext);
  const { currentPage, totalItems, setTotalItems } = useContext(MainContext);
  useEffect(() => {
    fetchCars(currentPage.garage, setCars, setError, setTotalItems);
  }, [currentPage.garage, fetchCars, setCars, setError, setTotalItems]);

  return (
    <>
      <Title title="GARAGE" total={totalItems.cars} />
      <WinnerModal />
      <Dashboard />
      <Track />
      <Pagination view="garage" limit={garagePageLimit} total={totalItems.cars} />
    </>
  );
};

export default Garage;
