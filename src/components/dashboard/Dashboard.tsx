import { useContext } from 'react';
import GarageContext from 'components/context/GarageContext';
import Create from './Create';
import Update from './Update';
import generate from './Generate';

const Dashboard = () => {
  const { setCars, setError } = useContext(GarageContext);

  const quantity = 100;
  return (
    <>
      <button type="button">RACE</button>
      <button type="button">RESET</button>
      <Create />
      <Update />
      <button type="button" onClick={() => generate(quantity, setCars, setError)}>
        GENERATE CARS
      </button>
    </>
  );
};

export default Dashboard;
