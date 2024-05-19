import styled from 'styled-components';
import Button from 'components/app/Button';
import { styleColors } from 'styles/variables';

const ButtonPrimary = styled(Button)`
  color: aqua;
  background-color: #151515;
  font-size: 1.1rem;
  padding: 0.7rem;
  border: 1px solid #aaa;
  border-radius: 0.3rem;
  cursor: pointer;
  outline: none;
  text-shadow: 0 0 10px ${styleColors.btnText.secondary};
  box-shadow: 0 0 10px rgba(0, 255, 187, 0.5);
  &:hover {
    background-color: #222;
    border-color: #eee;
  }
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #171717;
      border-color: ${styleColors.btnText.secondary};
      text-shadow: 0 0 30px ${styleColors.btnText.secondary};
      box-shadow: 0 0 15px rgba(0, 255, 187, 0.5);
  }
  &:focus-visible {
    background-color: #171717;
    border-color: ${styleColors.btnText.secondary};
    text-shadow: 0 0 30px ${styleColors.btnText.secondary};
  }
  &:active {
    background-color: lime;
    color: #1115;
    border-color: ${styleColors.btnText.primary};
    box-shadow: 0 0 5px rgba(0, 255, 187, 0.5);
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
