import { useContext } from 'react';
import MainContext from 'components/context/MainContext';
import useLocalStorage from 'hooks/useLocalStorage';
import {
  InputsContainer,
  InputText,
  InputColor,
  InputButton,
} from 'components/garage/dashboard/Dashboard.styled';
import GarageContext from '../../context/GarageContext';
import { handleInputChange, handleCreate } from '../../../utils/garageUtils';

const Create = () => {
  const [newName, setNewName] = useLocalStorage('RACE_newName', '');
  const [newColor, setNewColor] = useLocalStorage('RACE_newColor', '');
  const { setCars, setError } = useContext(GarageContext);
  const { currentPage, setTotalItems } = useContext(MainContext);

  return (
    <InputsContainer className="create">
      <InputText
        type="text"
        placeholder="Enter Make"
        value={newName}
        onChange={(e) => handleInputChange(e, setNewName)}
      />
      <InputColor
        type="color"
        value={newColor}
        onChange={(e) => handleInputChange(e, setNewColor)}
      />
      <InputButton
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
      </InputButton>
    </InputsContainer>
  );
};

export default Create;
