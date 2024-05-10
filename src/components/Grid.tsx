import { useContext } from 'react';
import GarageContext from './context/GarageContext';
import Car from './car/Car';

const Grid = () => {
  const { cars } = useContext(GarageContext);

  return (
    <>
      {cars.map((car: CarData) => {
        return (
          <Car
            key={car.id}
            id={car.id}
            name={car.name}
            color={car.color}
            status={car.status}
            time={car.time}
          />
        );
      })}
    </>
  );
};

export default Grid;
