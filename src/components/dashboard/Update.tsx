import { useState } from 'react';
import handleInputChange from '../../utils/garageUtils';

type UpdateProps = {
  id: number;
  cars: CarData[];
  setCars: SetCars;
  setError: SetError;
  updateCar: UpdateCar;
};

type HandleUpdate = (
  id: number,
  name: string,
  color: string,
  updateCar: UpdateCar,
  cars: CarData[],
  setCars: SetCars,
  setError: SetError,
  setUpdateName: InputSetter,
  setUpdateColor: InputSetter
) => void;

const handleUpdate: HandleUpdate = async (
  id,
  name,
  color,
  updateCar,
  cars,
  setCars,
  setError,
  setUpdateName,
  setUpdateColor
) => {
  const carUpdate = { id, name, color };
  updateCar(carUpdate, cars, setCars, setError);
  handleInputChange(null, setUpdateName);
  handleInputChange(null, setUpdateColor);
};

const Update = ({ id, cars, setCars, setError, updateCar }: UpdateProps) => {
  const [updateName, setUpdateName] = useState('');
  const [updateColor, setUpdateColor] = useState('');
  return (
    <>
      <input
        type="text"
        placeholder="Enter Make"
        value={updateName}
        onChange={(e) => handleInputChange(e, setUpdateName)}
      />
      <input
        type="color"
        value={updateColor}
        onChange={(e) => handleInputChange(e, setUpdateColor)}
      />
      <button
        type="button"
        onClick={() =>
          handleUpdate(
            id,
            updateName,
            updateColor,
            updateCar,
            cars,
            setCars,
            setError,
            setUpdateName,
            setUpdateColor
          )
        }
      >
        UPDATE
      </button>
    </>
  );
};

export default Update;
