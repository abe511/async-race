type CarData = {
  id: number;
  name: string;
  color: string;
  time: number;
  status: string;
};

type NewCarData = { name: string; color: string };

type CarUpdateData = { id: number; name: string; color: string };

type CarStatus = { status: string; time?: number; bestTime?: number; wins?: number };

type EngineData = { velocity: number; distance: number };

type EngineStatus = { success: boolean };

type RaceResults = { id: number; time: number };

type WinnerModal = { isOpen: boolean; id: number; name: string; time: number };

type WinnerData = { id: number; time: number; wins: number; name: string; color: string };

type WinnerPayload = { id: number; time: number; wins: number };

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
  winners: WinnerData[],
  setCars: SetCars,
  setError: SetError,
  setTotalItems: SetState
) => void;

type HandleStart = (id: number, setCars: SetCars, setError: SetError) => void;

type HandleStop = (id: number, setCars: SetCars, setError: SetError) => void;

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

type FetchWinners = (
  page: number,
  setWinners: SetState,
  setError: SetError,
  setTotalItems: SetState,
  sort: string,
  order: string
) => Promise<void>;

type SortOrder = {
  column: string;
  order: string;
};

type CarsMap = {
  [id: number]: {
    id: number;
    name: string;
    color: string;
  };
};

type AddWinner = (payload: WinnerData, setWinners: SetState, setError: SetError) => Promise<void>;

type UpdateWinner = (
  updatedWinner: WinnerData,
  setWinners: SetState,
  setError: SetError
) => Promise<void>;

type RemoveWinner = (id: number, setError: SetError) => Promise<void>;

type UpdateWinnersList = (
  winners: WinnerData[],
  newWinner: NewWinnerData,
  setWinners: SetState,
  setError: SetError
) => void;

type IconProps = {
  fill: string;
  stroke: string;
  width: number | string;
  height: number | string;
};
