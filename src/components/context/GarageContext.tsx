import { createContext } from 'react';

type GarageContextProps = {
  id: number;
  cars: CarData[];
  setCars: SetCars;
  error: string | null;
  setError: SetError;
  setSelected: SetState;
  fetchCars: FetchCars;
  addCar: AddCar;
  updateCar: UpdateCar;
  removeCar: RemoveCar;
};

const GarageContext = createContext<GarageContextProps>({
  id: -1,
  cars: [],
  setCars: () => {},
  error: '',
  setError: () => {},
  setSelected: () => {},
  fetchCars: () => {},
  addCar: () => {},
  updateCar: () => {},
  removeCar: () => {},
});

export default GarageContext;
