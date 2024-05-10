import { useContext } from 'react';
import { engineControl } from 'api/garageApi';
import GarageContext from '../context/GarageContext';

type CarControlsProps = {
  id: number;
  engineStatus: string;
  setEngineStatus: SetState;
  setDuration: SetState;
};

export const handleStart = async (
  id: number,
  setEngineStatus: SetState,
  setDuration: SetState,
  setError: SetError
) => {
  try {
    setEngineStatus('start');
    const engineData = (await engineControl(id, 'started')) as EngineData;
    if (!engineData) {
      setEngineStatus('stop');
      throw new Error('Failed to start engine');
    }

    setDuration(engineData.distance / engineData.velocity);
    setEngineStatus('move');

    const drive = (await engineControl(id, 'drive')) as EngineStatus;
    if (drive && !drive.success) {
      setEngineStatus('pause');
      throw new Error('Engine failure');
    }
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

export const handleStop = async (id: number, setEngineStatus: SetState, setError: SetError) => {
  try {
    const engineData = await engineControl(id, 'stopped');
    if (!engineData) {
      throw new Error('Failed to stop engine');
    }
    setEngineStatus('stop');
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  }
};

const CarControls = ({ id, engineStatus, setEngineStatus, setDuration }: CarControlsProps) => {
  const { removeCar, setCars, setError, setSelected } = useContext(GarageContext);

  return (
    <>
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
    </>
  );
};

export default CarControls;
