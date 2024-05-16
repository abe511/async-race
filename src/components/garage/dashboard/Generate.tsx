import { useContext } from 'react';
import GarageContext from 'components/context/GarageContext';
import { generateCars } from 'utils/garageUtils';
import MainContext from 'components/context/MainContext';
import { GenerateContainer, GenerateButton } from 'components/garage/dashboard/Dashboard.styled';

type GenerateProps = {
  quantity: number;
};

const Generate = ({ quantity }: GenerateProps) => {
  const { setCars, setError } = useContext(GarageContext);
  const { currentPage, setTotalItems } = useContext(MainContext);

  return (
    <GenerateContainer className="generate">
      <GenerateButton
        onClick={() => generateCars(quantity, setCars, setError, currentPage.garage, setTotalItems)}
      >
        GENERATE CARS
      </GenerateButton>
    </GenerateContainer>
  );
};

export default Generate;
