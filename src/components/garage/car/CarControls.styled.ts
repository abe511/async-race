import styled from 'styled-components';
import ButtonPrimary from 'components/app/Button.styled';

export const CarControlsContainer = styled.aside`
  display: grid;
  grid-column: 1 / 2;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: var(--car-controls-w);
`;

// --btn-border-w

export const CarControlsButton = styled(ButtonPrimary)`
  color: crimson;
  border: 2px solid chocolate;
  font-size: 1rem;
  font-weight: 300;
  // width: max-content;
  // height: 1rem;
  line-height: 1rem;
  margin: 0;
  padding: 0;
  &:disabled {
    background-color: #333;
    color: #333;
    border-color: #555;
  }
`;
