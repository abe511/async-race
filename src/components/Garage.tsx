import { useEffect, useContext } from 'react';
import Dashboard from './dashboard/Dashboard';
import Track from './Track';
import Pagination from './Pagination';
import GarageContext from './context/GarageContext';
import Title from './Title';

const Garage = () => {
  const { fetchCars, setCars, setError } = useContext(GarageContext);

  useEffect(() => {
    fetchCars(setCars, setError);
  }, [fetchCars, setCars, setError]);

  return (
    <>
      <Title title="GARAGE" />
      <Dashboard />
      <Track />
      <Pagination />
    </>
  );
};

export default Garage;
