import styled, { keyframes } from 'styled-components';

export const CarTitle = styled.h5`
  margin-left: 6.5rem;
  align-self: center;
  // font-size: 1.2rem;
  opacity: 50%;
  z-index: 1;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
`;

export const Lane = styled.article`
  grid-column: 2 / 5;
  border: 1px solid aqua;
  display: flex;
  position: relative;
  height: 3rem;
`;

export const moveRight = keyframes`
  0% {
    transform: translateX(0);
    animation-timing-function: ease-in;
  }
  80% {
    transform: translateX(calc(var(--track-offset) - var(--car-width)));
    animation-timing-function: linear;
  }
  100% {
    transform: translateX(var(--track-offset));
    animation-timing-function: ease-out;
  }
`;

export const CarAnimated = styled.article<{ $duration: number; $status: string }>`
  // border: 1px solid yellow;
  height: 5rem;
  position: absolute;
  left: 0%;
  z-index: 1000;
  animation: ${({ $status }) => ($status === 'move' || $status === 'pause' ? moveRight : 'none')}
    ${({ $duration }) => $duration}ms linear forwards;
  animation-play-state: ${({ $status }) => ($status === 'pause' ? 'paused' : 'running')};
`;
