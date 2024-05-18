import { useContext } from 'react';
import { handleStart, handleStop } from 'utils/carUtils';
import MainContext from 'components/context/MainContext';
import GarageContext from 'components/context/GarageContext';
import WinnersContext from 'components/context/WinnersContext';
import { CarControlsContainer, CarControlsButton } from 'components/garage/car/CarControls.styled';
import { StartIcon, StopIcon, SelectIcon, RemoveIcon } from 'components/icons/CarControlsIcons';
import { size } from 'styles/variables';

type CarControlsProps = {
  id: number;
  status: string;
};

const CarControls = ({ id, status }: CarControlsProps) => {
  const { cars, removeCar, setCars, setError, setSelected } = useContext(GarageContext);
  const { setTotalItems } = useContext(MainContext);
  const { winners } = useContext(WinnersContext);

  return (
    <CarControlsContainer>
      <CarControlsButton onClick={() => setSelected(id)}>
        <SelectIcon fill="" stroke="" width={size.medium} height={size.medium} />
      </CarControlsButton>
      <CarControlsButton
        onClick={() => handleStart(id, setCars, setError)}
        disabled={status === 'start' || status === 'move' || status === 'pause'}
      >
        <StartIcon fill="" stroke="" width={size.medium} height={size.medium} />
      </CarControlsButton>
      <CarControlsButton
        onClick={() => removeCar(id, cars, winners, setCars, setError, setTotalItems)}
      >
        <RemoveIcon fill="" stroke="" width={size.medium} height={size.medium} />
      </CarControlsButton>
      <CarControlsButton
        onClick={() => handleStop(id, setCars, setError)}
        disabled={status === 'stop' || status === 'stopping' || status === 'start'}
      >
        <StopIcon fill="" stroke="" width={size.medium} height={size.medium} />
      </CarControlsButton>
    </CarControlsContainer>
  );
};

export default CarControls;
