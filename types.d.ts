type CarData = {
  id: number;
  name: string;
  color: string;
};

type FetchCars = (setCars: SetCars, setError: SetError) => void;

type SetCars = (cars: CarData[]) => void;

type SetError = (error: string | null) => void;

type SetSelected = (id: number) => void;

type NewCarData = { name: string; color: string };

type AddCar = (payload: NewCarData, cars: CarData[], setCars: SetCars, setError: SetError) => void;

type UpdateCar = (car: CarData, cars: CarData[], setCars: SetCars, setError: SetError) => void;

type RemoveCar = (id: number, cars: CarData[], setCars: SetCars, setError: SetError) => void;

type InputSetter = (value: string) => void;
