import { useState, useMemo } from 'react';
import { addCar, fetchCars, updateCar, removeCar } from '../../utils/garageUtils';
import GarageContext from './GarageContext';

const GarageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cars, setCars] = useState<CarData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<number>(0);

  return (
    <GarageContext.Provider
      value={useMemo(() => {
        return {
          id: selected,
          cars,
          error,
          setCars,
          setError,
          setSelected,
          addCar,
          fetchCars,
          updateCar,
          removeCar,
        };
      }, [cars, error, selected])}
    >
      {children}
    </GarageContext.Provider>
  );
};

export default GarageContextProvider;
