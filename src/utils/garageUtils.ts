import { getCars, createCar, updateCarData, deleteCarData } from 'api/garageApi';

const names = [
  'Porsche 911',
  'Chevrolet Corvette',
  'Ford Mustang',
  'BMW M3',
  'Audi R8',
  'Nissan GT-R',
  'Lamborghini Aventador',
  'Ferrari 488 GTB',
  'McLaren 720S',
  'Aston Martin Vantage',
  'Jaguar F-Type',
  'Mercedes-AMG GT',
  'Dodge Viper',
  'Lexus LC',
  'Toyota Supra',
  'Acura NSX',
  'Subaru WRX STI',
  'Lotus Evora',
  'Alfa Romeo 4C',
  'Chevrolet Camaro ZL1',
];

const colors = [
  'red',
  'violet',
  'dodgerblue',
  'yellow',
  'magenta',
  'cyan',
  'coral',
  'gold',
  'aqua',
  'orangered',
  'royalblue',
  'fuchsia',
  'orchid',
  'springgreen',
  'orange',
  'pink',
  'white',
  'lime',
  'crimson',
  'deeppink',
];

export const generateCars = (quantity: number): NewCarData[] => {
  const cars: NewCarData[] = [];
  for (let i = 0; i < quantity; i += 1) {
    const newName = names[Math.floor(Math.random() * names.length)];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    cars.push({ name: newName, color: newColor });
  }
  return cars;
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

export const fetchCars: FetchCars = async (setCars, setError) => {
  try {
    const data = await getCars();
    setCars(data);
    if (!data.length) {
      throw new Error('No car data');
    }
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

export const updateCar: UpdateCar = async (updatedCar, setCars, setError) => {
  try {
    const data = await updateCarData(updatedCar);
    if (!data) {
      throw new Error('Failed to update the car');
    }
    setCars((prev: CarData[]) => prev.map((car) => (car.id === updatedCar.id ? updatedCar : car)));
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

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement> | null,
  setter: InputSetter
) => {
  setter(e?.target.value || '');
};
