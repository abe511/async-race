import { useContext } from 'react';
import GarageContext from 'components/context/GarageContext';
import { generateCars } from 'utils/garageUtils';

type GenerateProps = {
  quantity: number;
};

const Generate = ({ quantity }: GenerateProps) => {
  const { setCars, setError } = useContext(GarageContext);
  return (
    <button type="button" onClick={() => generateCars(quantity, setCars, setError)}>
      GENERATE CARS
    </button>
  );
};

export default Generate;
