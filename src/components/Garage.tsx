import { useEffect, useContext } from 'react';
// import { getCars, createCar, updateCarData, deleteCarData } from 'api/garageApi';
import Dashboard from './dashboard/Dashboard';
import Track from './Track';
import Pagination from './Pagination';
import GarageContext from './context/GarageContext';

// const fetchCars: FetchCars = async (setCars, setError) => {
//   try {
//     const data = await getCars();
//     setCars(data);
//     if (!data.length) {
//       throw new Error('No car data');
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       setError(error.message);
//     }
//   }
// };

// const addCar: AddCar = async (payload, setCars, setError) => {
//   try {
//     const newCar = await createCar(payload);
//     if (!newCar) {
//       throw new Error('Failed to create a car');
//     }
//     setCars((prev: CarData[]) => [...prev, newCar]);
//   } catch (error) {
//     if (error instanceof Error) {
//       setError(error.message);
//     }
//   }
// };

// const updateCar: UpdateCar = async (updatedCar, setCars, setError) => {
//   try {
//     const data = await updateCarData(updatedCar);
//     if (!data) {
//       throw new Error('Failed to update the car');
//     }
//     setCars((prev: CarData[]) => prev.map((car) => (car.id === updatedCar.id ? updatedCar : car)));
//   } catch (error) {
//     if (error instanceof Error) {
//       setError(error.message);
//     }
//   }
// };

// const removeCar: RemoveCar = async (id, setCars, setError) => {
//   try {
//     const data = await deleteCarData(id);
//     if (!data) {
//       throw new Error('Failed to remove the car');
//     }
//     setCars((prev: CarData[]) => prev.filter((car) => car.id !== id));
//   } catch (error) {
//     if (error instanceof Error) {
//       setError(error.message);
//     }
//   }
// };

const Garage = () => {
  // const [cars, setCars] = useState<CarData[]>([]);
  // const [error, setError] = useState<string | null>(null);
  // const [selected, setSelected] = useState<number>(0);

  const { fetchCars, setCars, error, setError } = useContext(GarageContext);

  useEffect(() => {
    fetchCars(setCars, setError);
  }, [fetchCars, setCars, setError]);

  return (
    <>
      <h3>garage {error}</h3>
      <Dashboard />
      <Track />
      <Pagination />
    </>
  );
};

export default Garage;
