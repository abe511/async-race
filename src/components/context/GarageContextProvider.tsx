import { useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { addCar, fetchCars, updateCar, removeCar } from '../../utils/garageUtils';
import GarageContext from './GarageContext';

const GarageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cars, setCars] = useLocalStorage('RACE_cars', []);
  const [error, setError] = useLocalStorage('RACE_error', null);
  const [selected, setSelected] = useLocalStorage('RACE_selected', 0);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [cars, error, selected])}
    >
      {children}
    </GarageContext.Provider>
  );
};

export default GarageContextProvider;
