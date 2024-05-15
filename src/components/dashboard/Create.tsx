import { useContext } from 'react';
import MainContext from 'components/context/MainContext';
import useLocalStorage from 'hooks/useLocalStorage';
import GarageContext from '../context/GarageContext';
import { handleInputChange, handleCreate } from '../../utils/garageUtils';

const Create = () => {
  const [newName, setNewName] = useLocalStorage('RACE_newName', '');
  const [newColor, setNewColor] = useLocalStorage('RACE_newColor', '');
  const { setCars, setError } = useContext(GarageContext);
  const { currentPage, setTotalItems } = useContext(MainContext);

  return (
    <article className="create">
      <input
        type="text"
        placeholder="Enter Make"
        value={newName}
        onChange={(e) => handleInputChange(e, setNewName)}
      />
      <input type="color" value={newColor} onChange={(e) => handleInputChange(e, setNewColor)} />
      <button
        type="button"
        onClick={() =>
          handleCreate(
            newName,
            newColor,
            setCars,
            setError,
            setNewName,
            setNewColor,
            currentPage.garage,
            setTotalItems
          )
        }
      >
        CREATE
      </button>
    </article>
  );
};

export default Create;
