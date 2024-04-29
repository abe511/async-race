import { useContext } from 'react';
import GarageContext from './context/GarageContext';
import Car from './Car';

type CarData = {
  id: number;
  name: string;
  color: string;
};

// type GridProps = {
//   cars: CarData[];
//   removeCar: RemoveCar;
//   setCars: SetCars;
//   setError: SetError;
//   setSelected: SetSelected;
// };

const Grid = () => {
  const { cars, removeCar, setCars, setError, setSelected } = useContext(GarageContext);
  return (
    <>
      {cars.map((car: CarData) => {
        return (
          <Car
            key={car.id}
            id={car.id}
            name={car.name}
            color={car.color}
            removeCar={removeCar}
            setCars={setCars}
            setError={setError}
            setSelected={setSelected}
          />
        );
      })}
    </>
  );
};

export default Grid;
