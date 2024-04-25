import Create from './Create';
import Update from './Update';

type DashboardProps = {
  id: number;
  cars: CarData[];
  setCars: SetCars;
  setError: SetError;
  addCar: AddCar;
  updateCar: UpdateCar;
};

const Dashboard = ({ id, cars, setCars, setError, addCar, updateCar }: DashboardProps) => {
  return (
    <>
      <button type="button">RACE</button>
      <button type="button">RESET</button>
      <Create addCar={addCar} cars={cars} setCars={setCars} setError={setError} />
      <Update id={id} updateCar={updateCar} cars={cars} setCars={setCars} setError={setError} />
      <button type="button">GENERATE CARS</button>
    </>
  );
};

export default Dashboard;
