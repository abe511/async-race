import { useState, useEffect } from 'react';
import getCars from 'services/CarService';
import CarImage from './CarImage';

const carContainerStyle: React.CSSProperties = {
  border: '1px solid red',
  display: 'flex',
  position: 'relative',
  // height: 'max-content',
  height: '5rem',
};

const carStyle: React.CSSProperties = {
  height: '5rem',
  position: 'absolute',
  left: '0%',
  fill: 'lemonchiffon',
  // fill: 'none',
  fillOpacity: '0.3',
  border: '1px solid violet',
  stroke: 'red',
  strokeWidth: 5,
};

type CarData = {
  id: number;
  name: string;
  color: string;
};

const handleSelect = () => {
  //
};

const handleRemove = () => {
  //
};

const handleStart = () => {
  //
};

const handleStop = () => {
  //
};

const Car = () => {
  const [cars, setCars] = useState<CarData[]>([]);

  const fetchCars = async () => {
    const data = await getCars('http://127.0.0.1:3000/garage');
    setCars(data);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <button type="button" onClick={handleSelect}>
        SELECT
      </button>
      <button type="button" onClick={handleRemove}>
        REMOVE
      </button>
      <button type="button" onClick={handleStart}>
        START
      </button>
      <button type="button" onClick={handleStop}>
        STOP
      </button>
      {cars.map((car: CarData) => {
        return (
          <div key={car.id} style={carContainerStyle}>
            <CarImage style={carStyle} />
          </div>
        );
      })}
    </>
  );
};

export default Car;
