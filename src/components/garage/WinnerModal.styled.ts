import styled, { keyframes } from 'styled-components';
import { styleColors } from 'styles/variables';

const modalAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const displayAnimation = keyframes`
  0% {
    opacity: 0;
    scale: 0.9;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
`;

const textAnimation = keyframes`
  0% {
    opacity: 0;
    filter: blur(1px);
    scale: 20;
  }
  100% {
    opacity: 1;
    scale: 1;
    filter: blur(0);
  }
`;

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #151515cc;
  z-index: 3000;
  animation: ${modalAnimation} 200ms ease-in forwards;
`;

export const Display = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: #151515cc;
  width: max-content;
  border: 1px solid ${styleColors.btnText.secondary};
  padding: 1rem;
  border-radius: 0.5rem;
  z-index: 3100;
  scale: 0.9;
  animation: ${displayAnimation} 200ms ease-in forwards;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  opacity: 0;
  animation: ${textAnimation} 400ms ease-in forwards 300ms;
  text-shadow: 0 0 5px ${styleColors.btnText.primary};
`;

export const WinnerName = styled.span`
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  font-size: larger;
  font-weight: bold;
  color: lime;
  text-shadow: 0 0 5px ${styleColors.btnText.secondary};
  animation: ${textAnimation} 400ms ease-in forwards 600ms;
`;

export const WinnerTime = styled.span`
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  font-size: larger;
  font-weight: bold;
  color: lime;
  text-shadow: 0 0 5px ${styleColors.btnText.secondary};
  animation: ${textAnimation} 400ms ease-in forwards 900ms;
`;
