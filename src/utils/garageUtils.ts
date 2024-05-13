import { getCars, getCar, createCar, addCars, updateCarData, deleteCarData } from 'api/garageApi';
import { makes, models, colors, defaultEngineData } from './data';

// get car data from the server
// add 'status' and 'time' properties to each car stored locally
export const fetchCars: FetchCars = async (page, setCars, setError, setTotalItems) => {
  try {
    const data = await getCars(page, setTotalItems);
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

export const generateCars: GenerateCars = async (
  quantity,
  setCars,
  setError,
  page,
  setTotalItems
) => {
  const cars = generator(quantity);
  const result = await addCars(cars);
  if (!result.length) {
    setError('Failed to add cars');
  } else {
    fetchCars(page, setCars, setError, setTotalItems);
  }
};

export const addCar: AddCar = async (payload, setCars, setError, page, setTotalItems) => {
  try {
    const newCar = await createCar(payload);
    if (!newCar) {
      throw new Error('Failed to create a car');
    }
    fetchCars(page, setCars, setError, setTotalItems);
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

export const removeCar: RemoveCar = async (id, cars, setCars, setError, setTotalItems) => {
  try {
    const data = await deleteCarData(id);
    if (!data) {
      throw new Error('Failed to remove the car');
    }
    setCars((prev: CarData[]) => prev.filter((car) => car.id !== id));
    const nextCarId = cars[cars.length - 1].id + 1;
    const nextCar = await getCar(nextCarId);
    if (nextCar) {
      setCars((prev: CarData[]) => [...prev, nextCar]);
      setTotalItems((prev: TotalItems) => ({ ...prev, cars: prev.cars - 1 }));
    }
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement> | null,
  setter: InputSetter
) => {
  setter(e?.target.value || '');
};

export const handleCreate: HandleCreate = async (
  name,
  color,
  setCars,
  setError,
  setNewName,
  setNewColor,
  page,
  setTotalItems
) => {
  const payload: NewCarData = { name, color };
  addCar(payload, setCars, setError, page, setTotalItems);
  handleInputChange(null, setNewName);
  handleInputChange(null, setNewColor);
};

export const handleUpdate: HandleUpdate = async (
  id,
  name,
  color,
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
