import { useState, useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { addCar, fetchCars, updateCar, removeCar } from '../../utils/garageUtils';
import GarageContext from './GarageContext';

const GarageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cars, setCars] = useLocalStorage('cars', []);
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
      }, [cars, error, selected, setCars])}
    >
      {children}
    </GarageContext.Provider>
  );
};

export default GarageContextProvider;
