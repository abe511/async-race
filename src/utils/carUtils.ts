import { engineControl } from 'api/garageApi';

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
