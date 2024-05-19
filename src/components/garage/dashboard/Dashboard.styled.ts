import styled from 'styled-components';
import ButtonPrimary from 'components/app/Button.styled';

export const DashboardContainer = styled.section`
  border: 1px solid royalblue;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background-color: #151515;
  color: deepskyblue;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(115, 0, 255, 0.7);
  text-shadow: 0 0 5px rgba(0, 162, 255, 0.9);
`;

export const ControlsContainer = styled.article`
  display: flex;
  gap: 0.5rem;
  // border: 2px solid darkgoldenrod;
  padding: 1rem;
`;

export const ControlsButton = styled(ButtonPrimary)`
  flex-grow: 1;
`;

export const InputsContainer = styled.article`
  display: grid;
  padding: 1rem;
  grid-template-columns: 3fr 1fr 2fr;
  column-gap: 0.5rem;
`;

export const Input = styled.input`
  border: 1px solid springgreen;
  border-radius: 0.5rem;
  height: 100%;
  box-shadow: 0 0 5px rgba(0, 255, 162, 0.5);
  outline: none;
`;

export const InputText = styled(Input)`
  color: springgreen;
  background-color: #151515;
  width: 100%;
  padding-left: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 119, 0.7);
  &:focus-visible {
    border-color: lime;
    box-shadow: 0 0 5px inset rgba(0, 255, 187, 0.5);
  }
`;

export const InputColor = styled(Input)`
  // border: 2px solid red;
  width: 100%;
  min-width: 3rem;
`;

export const InputButton = styled(ButtonPrimary)`
  color: lime;
`;

export const GenerateContainer = styled.article`
  padding: 1rem;
`;

export const GenerateButton = styled(ButtonPrimary)`
  // border: 2px solid chocolate;
  padding: 0.7rem 5rem;
`;
