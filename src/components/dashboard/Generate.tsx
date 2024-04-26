import { generateCars } from 'utils/garageUtils';
import { addCars } from 'api/garageApi';

const generate = async (quantity: number, setCars: SetCars, setError: SetError) => {
  const cars = generateCars(quantity);
  const result = await addCars(cars);
  if (!result.length) {
    setError('Failed to add cars');
  } else {
    setCars((prev: CarData[]) => [...prev, ...result]);
  }
};

export default generate;
