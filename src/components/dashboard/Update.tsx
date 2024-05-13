import { useState, useContext } from 'react';
import GarageContext from 'components/context/GarageContext';
import { handleInputChange, handleUpdate } from '../../utils/garageUtils';

const Update = () => {
  const [updName, setUpdName] = useState('');
  const [updColor, setUpdColor] = useState('');
  const { id, setCars, setError } = useContext(GarageContext);
  return (
    <article className="update">
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
          handleUpdate(id, updName, updColor, setCars, setError, setUpdName, setUpdColor)
        }
      >
        UPDATE
      </button>
    </article>
  );
};

export default Update;
