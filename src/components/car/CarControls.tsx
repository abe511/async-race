import { useContext } from 'react';
import styled from 'styled-components';
import { handleStart, handleStop } from 'utils/carUtils';
import GarageContext from '../context/GarageContext';

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
  const { removeCar, setCars, setError, setSelected } = useContext(GarageContext);

  return (
    <CarControlsContainer>
      <button type="button" onClick={() => setSelected(id)}>
        SELECT
      </button>
      <button type="button" onClick={() => removeCar(id, setCars, setError)}>
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
