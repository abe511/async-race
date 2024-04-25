import { useState, useEffect } from 'react';
import { getCars, createCar, updateCarData, deleteCarData } from 'api/garageApi';
import Controls from './dashboard/Dashboard';
import Track from './Track';
import Pagination from './Pagination';

const fetchCars: FetchCars = async (setCars, setError) => {
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

const addCar: AddCar = async (payload, cars, setCars, setError) => {
  try {
    const newCar = await createCar(payload);
    if (!newCar) {
      throw new Error('Failed to create a car');
    }
    setCars([...cars, newCar]);
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

const updateCar: UpdateCar = async (updatedCar, cars, setCars, setError) => {
  try {
    const data = await updateCarData(updatedCar);
    if (!data) {
      throw new Error('Failed to update the car');
    }
    setCars(cars.map((car) => (car.id === updatedCar.id ? updatedCar : car)));
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

const removeCar: RemoveCar = async (id, cars, setCars, setError) => {
  try {
    const data = await deleteCarData(id);
    if (!data) {
      throw new Error('Failed to remove the car');
    }
    setCars(cars.filter((car) => car.id !== id));
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

const Garage = () => {
  const [cars, setCars] = useState<CarData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    fetchCars(setCars, setError);
  }, []);

  return (
    <>
      <h3>garage {error}</h3>
      <Controls
        id={selected}
        cars={cars}
        setCars={setCars}
        setError={setError}
        addCar={addCar}
        updateCar={updateCar}
      />
      <Track
        cars={cars}
        removeCar={removeCar}
        setCars={setCars}
        setError={setError}
        setSelected={setSelected}
      />
      <Pagination />
    </>
  );
};

export default Garage;
