import { useContext } from 'react';
import styled from 'styled-components';
import { handleStart, handleStop } from 'utils/carUtils';
import MainContext from 'components/context/MainContext';
import GarageContext from 'components/context/GarageContext';
import WinnersContext from 'components/context/WinnersContext';

const CarControlsContainer = styled.aside`
  display: grid;
  grid-column: 1 / 2;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: var(--car-controls-w);
`;

// --btn-border-w

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
      <button type="button" onClick={() => setSelected(id)}>
        SELECT
      </button>
      <button
        type="button"
        onClick={() => removeCar(id, cars, winners, setCars, setError, setTotalItems)}
      >
        REMOVE
      </button>
      <button
        type="button"
        onClick={() => handleStart(id, setEngineStatus, setDuration, setError)}
        disabled={engineStatus !== 'stop'}
      >
        START
      </button>
      <button
        type="button"
        onClick={() => handleStop(id, setEngineStatus, setError)}
        disabled={engineStatus === 'stop'}
      >
        STOP
      </button>
    </CarControlsContainer>
  );
};

export default CarControls;
