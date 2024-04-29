import { useState, useContext } from 'react';
import GarageContext from 'components/context/GarageContext';
import { handleInputChange } from '../../utils/garageUtils';

type HandleUpdate = (
  id: number,
  name: string,
  color: string,
  updateCar: UpdateCar,
  setCars: React.Dispatch<CarData[]>,
  setError: React.Dispatch<string | null>,
  setUpdName: React.Dispatch<string>,
  setUpdColor: React.Dispatch<string>
) => void;

const handleUpdate: HandleUpdate = async (
  id,
  name,
  color,
  updateCar,
  setCars,
  setError,
  setUpdName,
  setUpdColor
) => {
  const carUpdate = { id, name, color };
  updateCar(carUpdate, setCars, setError);
  handleInputChange(null, setUpdName);
  handleInputChange(null, setUpdColor);
};

const Update = () => {
  const [updName, setUpdName] = useState('');
  const [updColor, setUpdColor] = useState('');
  const { id, setCars, setError, updateCar } = useContext(GarageContext);
  return (
    <>
      <input
        type="text"
        placeholder="Enter Make"
        value={updName}
        onChange={(e) => handleInputChange(e, setUpdName)}
      />
      <input type="color" value={updColor} onChange={(e) => handleInputChange(e, setUpdColor)} />
      <button
        type="button"
        onClick={() =>
          handleUpdate(id, updName, updColor, updateCar, setCars, setError, setUpdName, setUpdColor)
        }
      >
        UPDATE
      </button>
    </>
  );
};

export default Update;
