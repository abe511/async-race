import { useEffect, useContext } from 'react';
import Dashboard from './dashboard/Dashboard';
import Track from './Track';
import Pagination from './Pagination';
import GarageContext from './context/GarageContext';

const Garage = () => {
  const { fetchCars, setCars, error, setError } = useContext(GarageContext);

  useEffect(() => {
    fetchCars(setCars, setError);
  }, [fetchCars, setCars, setError]);

  return (
    <>
      <h3>garage {error}</h3>
      <Dashboard />
      <Track />
      <Pagination />
    </>
  );
};

export default Garage;
