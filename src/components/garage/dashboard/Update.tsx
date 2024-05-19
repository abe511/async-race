import { useContext } from 'react';
import GarageContext from 'components/context/GarageContext';
import useLocalStorage from 'hooks/useLocalStorage';
import {
  InputsContainer,
  InputText,
  InputColor,
  InputButton,
} from 'components/garage/dashboard/Dashboard.styled';
import { handleInputChange, handleUpdate } from '../../../utils/garageUtils';

const Update = () => {
  const [updName, setUpdName] = useLocalStorage('RACE_updateName', '');
  const [updColor, setUpdColor] = useLocalStorage('RACE_updateColor', '');
  const { id, setCars, setError } = useContext(GarageContext);
  return (
    <InputsContainer className="update">
      <InputText
        type="text"
        placeholder="Enter Name"
        value={updName}
        onChange={(e) => handleInputChange(e, setUpdName)}
      />
      <InputColor
        type="color"
        value={updColor}
        onChange={(e) => handleInputChange(e, setUpdColor)}
      />
      <InputButton
        onClick={() =>
          handleUpdate(id, updName, updColor, setCars, setError, setUpdName, setUpdColor)
        }
      >
        UPDATE
      </InputButton>
    </InputsContainer>
  );
};

export default Update;
