import { useContext } from 'react';
import GarageContext from './context/GarageContext';
import Car from './Car';

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
