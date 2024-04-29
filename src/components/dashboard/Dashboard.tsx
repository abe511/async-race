import { useContext } from 'react';
import GarageContext from 'components/context/GarageContext';
import Create from './Create';
import Update from './Update';
import generate from './Generate';

// type DashboardProps = {
//   id: number;
//   setCars: SetCars;
//   setError: SetError;
//   addCar: AddCar;
//   updateCar: UpdateCar;
// };

// const Dashboard = ({ id, setCars, setError, addCar, updateCar }: DashboardProps) => {
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
