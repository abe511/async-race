type CarData = {
  id: number;
  name: string;
  color: string;
  time: number;
  status: string;
  bestTime: number;
  wins: number;
};

type CarUpdateData = {
  id: number;
  name: string;
  color: string;
};

type EngineData = {
  velocity: number;
  distance: number;
};

type EngineStatus = {
  success: boolean;
};

type CarStatus = {
  status: string;
  time?: number;
  bestTime?: number;
  wins?: number;
};

type WinnerModal = {
  isOpen: boolean;
  id: number;
  name: string;
  time: number;
};

type RaceResults = { id: number; time: number };

type FetchCars = (setCars: SetCars, setError: SetError) => void;
// type FetchCars = (setCars: SetCars, setError: SetError, status, time) => void;

type SetState = Dispatch<S | SetStateAction<S>>;

type SetCars = Dispatch<CarData[] | SetStateAction<CarData[]>>;

type SetError = Dispatch<string | null | SetStateAction<string | null>>;

type SetSelected = (id: number) => void;

type NewCarData = { name: string; color: string };

type AddCar = (payload: NewCarData, setCars: SetCars, setError: SetError) => void;

// type UpdateCar = (car: CarData, setCars: SetCars, setError: SetError) => void;
type UpdateCar = (car: CarUpdateData, setCars: SetCars, setError: SetError) => void;

type RemoveCar = (id: number, setCars: SetCars, setError: SetError) => void;

type InputSetter = (value: string) => void;

type HandleCreate = (
  name: string,
  color: string,
  addCar: AddCar,
  setCars: SetCars,
  setError: SetError,
  setNewName: React.Dispatch<string>,
  setNewColor: React.Dispatch<string>
) => void;

type HandleUpdate = (
  id: number,
  name: string,
  color: string,
  updateCar: UpdateCar,
  setCars: SetCars,
  setError: SetError,
  setUpdName: SetState,
  setUpdColor: SetState
) => void;
