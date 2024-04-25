import { useState } from 'react';
import handleInputChange from '../../utils/garageUtils';

type CreateProps = {
  cars: CarData[];
  setCars: SetCars;
  setError: SetError;
  addCar: AddCar;
};

type HandleCreate = (
  name: string,
  color: string,
  addCar: AddCar,
  cars: CarData[],
  setCars: SetCars,
  setError: SetError,
  setNewName: InputSetter,
  setNewColor: InputSetter
) => void;

const handleCreate: HandleCreate = async (
  name,
  color,
  addCar,
  cars,
  setCars,
  setError,
  setNewName,
  setNewColor
) => {
  const payload: NewCarData = { name, color };
  addCar(payload, cars, setCars, setError);
  handleInputChange(null, setNewName);
  handleInputChange(null, setNewColor);
};

const Create = ({ cars, setCars, setError, addCar }: CreateProps) => {
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState('');

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
          handleCreate(newName, newColor, addCar, cars, setCars, setError, setNewName, setNewColor)
        }
      >
        CREATE
      </button>
    </>
  );
};

export default Create;
