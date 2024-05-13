import { useContext } from 'react';
import GarageContext from 'components/context/GarageContext';
import { generateCars } from 'utils/garageUtils';
import MainContext from 'components/context/MainContext';

type GenerateProps = {
  quantity: number;
};

const Generate = ({ quantity }: GenerateProps) => {
  const { setCars, setError } = useContext(GarageContext);
  const { currentPage, setTotalItems } = useContext(MainContext);

  return (
    <article className="generate">
      <button
        type="button"
        onClick={() => generateCars(quantity, setCars, setError, currentPage.garage, setTotalItems)}
      >
        GENERATE CARS
      </button>
    </article>
  );
};

export default Generate;
