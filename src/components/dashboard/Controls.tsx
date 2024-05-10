import { useContext } from 'react';
import GarageContext from 'components/context/GarageContext';
import { handleRace, handleReset } from 'utils/raceUtils';

const Controls = () => {
  const { cars, setCars, setError } = useContext(GarageContext);

  return (
    <article className="controls">
      <button type="button" onClick={() => handleRace(cars, setCars, setError)}>
        RACE
      </button>
      <button type="button" onClick={() => handleReset(cars, setCars, setError)}>
        RESET
      </button>
    </article>
  );
};

export default Controls;
