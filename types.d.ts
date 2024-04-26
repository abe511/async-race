type CarData = {
  id: number;
  name: string;
  color: string;
};

type FetchCars = (setCars: SetCars, setError: SetError) => void;

type SetState = Dispatch<S | SetStateAction<S>>;

type SetCars = Dispatch<CarData[] | SetStateAction<CarData[]>>;

type SetError = Dispatch<string | null | SetStateAction<string | null>>;

type SetSelected = (id: number) => void;

type NewCarData = { name: string; color: string };

type AddCar = (payload: NewCarData, setCars: SetCars, setError: SetError) => void;

type UpdateCar = (car: CarData, setCars: SetCars, setError: SetError) => void;

type RemoveCar = (id: number, setCars: SetCars, setError: SetError) => void;

type InputSetter = (value: string) => void;
