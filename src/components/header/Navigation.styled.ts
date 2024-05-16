import styled from 'styled-components';
import ButtonPrimary from 'components/app/Button.styled';

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  border: 2px solid aqua;
  padding: 1rem;
  width: 30%;
  row-gap: 1rem;
`;

export const NavButton = styled(ButtonPrimary)`
  background-color: #151515;
  border: 1px dashed aquamarine;
  border-style: outset;
  color: aqua;
  padding: 0.5rem;
  width: 100%;
  font-size: large;
  border-radius: 0.5rem;
  font-style: italic;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 255, 187, 0.5);
  text-shadow: 0 0 10px rgba(0, 255, 128, 0.7);
`;
