import { createContext } from 'react';

type ContextProps = {
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
  winnerModalData: WinnerModal;
  setWinnerModalData: SetState;
};

const GarageContext = createContext<ContextProps>({
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
  winnerModalData: {
    open: false,
    id: -1,
    name: '',
    time: Infinity,
  },
  setWinnerModalData: () => {},
});

export default GarageContext;
