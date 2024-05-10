import { getCars, createCar, addCars, updateCarData, deleteCarData } from 'api/garageApi';
import { makes, models, colors, defaultEngineData } from './data';

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement> | null,
  setter: InputSetter
) => {
  setter(e?.target.value || '');
};

export const handleCreate: HandleCreate = async (
  name,
  color,
  addCar,
  setCars,
  setError,
  setNewName,
  setNewColor
) => {
  const payload: NewCarData = { name, color };
  addCar(payload, setCars, setError);
  handleInputChange(null, setNewName);
  handleInputChange(null, setNewColor);
};

export const handleUpdate: HandleUpdate = async (
  id,
  name,
  color,
  updateCar,
  setCars,
  setError,
  setUpdName,
  setUpdColor
) => {
  const carUpdate = { id, name, color };
  updateCar(carUpdate, setCars, setError);
  handleInputChange(null, setUpdName);
  handleInputChange(null, setUpdColor);
};

const generator = (quantity: number): NewCarData[] => {
  const cars: NewCarData[] = [];
  for (let i = 0; i < quantity; i += 1) {
    const make = makes[Math.floor(Math.random() * makes.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    cars.push({ name: `${make} ${model}`, color });
  }
  return cars;
};

export const generateCars = async (quantity: number, setCars: SetCars, setError: SetError) => {
  const cars = generator(quantity);
  const result = await addCars(cars);
  if (!result.length) {
    setError('Failed to add cars');
  } else {
    setCars((prev: CarData[]) => [...prev, ...result]);
  }
};

export const addCar: AddCar = async (payload, setCars, setError) => {
  try {
    const newCar = await createCar(payload);
    if (!newCar) {
      throw new Error('Failed to create a car');
    }
    setCars((prev: CarData[]) => [...prev, newCar]);
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

// get car data from the server
// add 'status' and 'time' properties to each car stored locally
export const fetchCars: FetchCars = async (setCars, setError) => {
  try {
    const data = await getCars();
    const localData = data.map((car) => {
      return { ...car, ...defaultEngineData };
    });
    setCars(localData);
    if (!data.length) {
      throw new Error('No car data');
    }
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

// modify 'name' and 'color' properties only
export const updateCar: UpdateCar = async (updatedCar, setCars, setError) => {
  try {
    const data = await updateCarData(updatedCar);
    if (!data) {
      throw new Error('Failed to update the car');
    }
    setCars((prev: CarData[]) =>
      prev.map((car) => (car.id === updatedCar.id ? { ...car, ...updatedCar } : car))
    );
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

export const removeCar: RemoveCar = async (id, setCars, setError) => {
  try {
    const data = await deleteCarData(id);
    if (!data) {
      throw new Error('Failed to remove the car');
    }
    setCars((prev: CarData[]) => prev.filter((car) => car.id !== id));
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};
