type CarData = {
  id: number;
  name: string;
  color: string;
  time: number;
  status: string;
  bestTime: number;
  wins: number;
};

type NewCarData = { name: string; color: string };

type CarUpdateData = { id: number; name: string; color: string };

type CarStatus = { status: string; time?: number; bestTime?: number; wins?: number };

type EngineData = { velocity: number; distance: number };

type EngineStatus = { success: boolean };

type RaceResults = { id: number; time: number };

type WinnerModal = { isOpen: boolean; id: number; name: string; time: number };

type WinnerData = { id: number; name: string; color: string; bestTime: number; wins: number };

type CurrentPage = { garage: number; winners: number };

type TotalItems = { cars: number; winners: number };

type PaginationProps = { view: string; limit: number; total: number };

type FetchCars = (
  page: number,
  setCars: SetCars,
  setError: SetError,
  setTotalItems: SetState
) => void;

type SetState = Dispatch<S | SetStateAction<S>>;

type SetCars = Dispatch<CarData[] | SetStateAction<CarData[]>>;

type SetError = Dispatch<string | null | SetStateAction<string | null>>;

type SetSelected = (id: number) => void;

type GenerateCars = (
  quantity: number,
  setCars: SetCars,
  setError: SetError,
  page: number,
  setTotalItems: SetState
) => void;

type AddCar = (
  payload: NewCarData,
  setCars: SetCars,
  setError: SetError,
  page: number,
  setTotalItems: SetState
) => void;

type UpdateCar = (car: CarUpdateData, setCars: SetCars, setError: SetError) => void;

type RemoveCar = (
  id: number,
  cars: CarData[],
  setCars: SetCars,
  setError: SetError,
  setTotalItems: SetState
) => void;

type InputSetter = (value: string) => void;

type HandleCreate = (
  name: string,
  color: string,
  setCars: SetCars,
  setError: SetError,
  setNewName: SetState,
  setNewColor: SetState,
  page: number,
  setTotalItems: SetState
) => void;

type HandleUpdate = (
  id: number,
  name: string,
  color: string,
  setCars: SetCars,
  setError: SetError,
  setUpdName: SetState,
  setUpdColor: SetState
) => void;

type HandlePageSwitch = (
  page: number,
  view: string,
  setCurrentPage: SetState,
  setCars: SetCars,
  setError: SetError,
  setTotalItems: SetState
) => void;
