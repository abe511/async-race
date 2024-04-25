import Car from './Car';

type CarData = {
  id: number;
  name: string;
  color: string;
};

type GridProps = {
  cars: CarData[];
  removeCar: RemoveCar;
  setCars: SetCars;
  setError: SetError;
  setSelected: SetSelected;
};

const Grid = ({ cars, removeCar, setCars, setError, setSelected }: GridProps) => {
  return (
    <>
      {cars.map((car: CarData) => {
        return (
          <Car
            key={car.id}
            id={car.id}
            name={car.name}
            color={car.color}
            cars={cars}
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
