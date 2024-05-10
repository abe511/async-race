import { useState, useContext } from 'react';
import GarageContext from '../context/GarageContext';
import { handleInputChange, handleCreate } from '../../utils/garageUtils';

const Create = () => {
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState('');
  const { setCars, setError, addCar } = useContext(GarageContext);

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
          handleCreate(newName, newColor, addCar, setCars, setError, setNewName, setNewColor)
        }
      >
        CREATE
      </button>
    </article>
  );
};

export default Create;
