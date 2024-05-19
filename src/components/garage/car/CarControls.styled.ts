import styled from 'styled-components';

export const CarControlsContainer = styled.aside`
  display: grid;
  grid-column: 1 / 2;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: space-between;
  row-gap: 0.2rem;
  width: var(--car-controls-w);
`;

export const CarControlsButton = styled.button`
  display: flex;
  align-self: center;
  justify-self: center;
  border: var(--btn-border-w) solid goldenrod;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 300;
  width: auto;
  line-height: 1rem;
  margin: 0;
  padding: 0.1rem 0.6rem;
  &:hover {
    background-color: unset;
    border-color: goldenrod;
    box-shadow: 0 0 2px goldenrod;
    filter: drop-shadow(0 0 2px goldenrod);
  }
  &:active {
    background-color: darkorange;
    border-color: goldenrod;
    box-shadow: 0 0 3px goldenrod;
    filter: drop-shadow(0 0 2px gold);
  }
  &:disabled {
    background-color: #111;
    border-color: brown;
    box-shadow: none;
    filter: none;
  }
`;
