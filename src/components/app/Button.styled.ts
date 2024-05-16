import styled from 'styled-components';
import Button from 'components/app/Button';

const ButtonPrimary = styled(Button)`
  color: #111;
  background-color: #777;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.25rem;
  border: 1px solid #aaa;
  border-radius: 0.3rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #aaa;
    border-color: #eee;
  }
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #aaa;
      border-color: #eee;
  }
  &:focus-visible {
    background-color: #aaa;
    border-color: #eee;
  }
  &:active {
    background-color: #eee;
    border-color: #fff;
  }
  &:disabled {
    color: grey;
  }
  // &focus-visible:not(:active) {
  //   background-color: #777;
  //   border-color: #aaa;
  // }
  // @media (hover: none), (hover: on-demand) {
  //   &:hover {
  //     background-color: none;
  //     border-color: none;
  // }
`;

export default ButtonPrimary;
