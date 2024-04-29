import { useState, useContext } from 'react';
import GarageContext from '../context/GarageContext';
import { handleInputChange } from '../../utils/garageUtils';

type HandleCreate = (
  name: string,
  color: string,
  addCar: AddCar,
  setCars: SetCars,
  setError: SetError,
  setNewName: React.Dispatch<string>,
  setNewColor: React.Dispatch<string>
) => void;

const handleCreate: HandleCreate = async (
  name,
  color,
  addCar,
  setCars,
  setError,
  setNewName,
  setNewColor
) => {
  const payload: NewCarData = { name, color };
  addCar(payload, setCars, setError);
  handleInputChange(null, setNewName);
  handleInputChange(null, setNewColor);
};

const Create = () => {
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState('');
  const { setCars, setError, addCar } = useContext(GarageContext);

  return (
    <>
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
    </>
  );
};

export default Create;
