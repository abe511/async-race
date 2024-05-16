import { useContext } from 'react';
import { handleStart, handleStop } from 'utils/carUtils';
import MainContext from 'components/context/MainContext';
import GarageContext from 'components/context/GarageContext';
import WinnersContext from 'components/context/WinnersContext';
import { CarControlsContainer, CarControlsButton } from 'components/garage/car/CarControls.styled';

type CarControlsProps = {
  id: number;
  engineStatus: string;
  setEngineStatus: SetState;
  setDuration: SetState;
};

const CarControls = ({ id, engineStatus, setEngineStatus, setDuration }: CarControlsProps) => {
  const { cars, removeCar, setCars, setError, setSelected } = useContext(GarageContext);
  const { setTotalItems } = useContext(MainContext);
  const { winners } = useContext(WinnersContext);
  return (
    <CarControlsContainer>
      <CarControlsButton onClick={() => setSelected(id)}>SELECT</CarControlsButton>
      <CarControlsButton
        onClick={() => removeCar(id, cars, winners, setCars, setError, setTotalItems)}
      >
        REMOVE
      </CarControlsButton>
      <CarControlsButton
        onClick={() => handleStart(id, setEngineStatus, setDuration, setError)}
        disabled={engineStatus !== 'stop'}
      >
        START
      </CarControlsButton>
      <CarControlsButton
        onClick={() => handleStop(id, setEngineStatus, setError)}
        disabled={engineStatus === 'stop'}
      >
        STOP
      </CarControlsButton>
    </CarControlsContainer>
  );
};

export default CarControls;
