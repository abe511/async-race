import { useContext } from 'react';
import MainContext from 'components/context/MainContext';
import GarageContext from 'components/context/GarageContext';
import WinnersContext from 'components/context/WinnersContext';
import { handleRace, handleReset } from 'utils/raceUtils';
import { ControlsContainer, ControlsButton } from 'components/garage/dashboard/Dashboard.styled';

const Controls = () => {
  const { cars, setCars, setError } = useContext(GarageContext);
  const { setWinnerModalData } = useContext(MainContext);
  const { winners, setWinners } = useContext(WinnersContext);

  return (
    <ControlsContainer>
      <ControlsButton
        onClick={() => handleRace(cars, setCars, setError, setWinnerModalData, winners, setWinners)}
      >
        RACE
      </ControlsButton>
      <ControlsButton onClick={() => handleReset(cars, setCars, setError)}>RESET</ControlsButton>
    </ControlsContainer>
  );
};

export default Controls;
