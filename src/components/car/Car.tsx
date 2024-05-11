import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import CarImage from './CarImage';
import CarControls from './CarControls';

const CarTitle = styled.h5`
  margin-left: 6.5rem;
  align-self: center;
  // font-size: 1.2rem;
  opacity: 50%;
  z-index: 1;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
`;

const Lane = styled.article`
  grid-column: 2 / 5;
  border: 1px solid aqua;
  display: flex;
  position: relative;
  height: 3rem;
`;

const moveRight = keyframes`
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

const CarAnimated = styled.article<{ $duration: number; $status: string }>`
  // border: 1px solid yellow;
  height: 5rem;
  position: absolute;
  left: 0%;
  z-index: 1000;
  animation: ${({ $status }) => ($status === 'move' || $status === 'pause' ? moveRight : 'none')}
    ${({ $duration }) => $duration}ms linear forwards;
  animation-play-state: ${({ $status }) => ($status === 'pause' ? 'paused' : 'running')};
`;

type CarProps = {
  id: number;
  name: string;
  color: string;
  status: string;
  time: number;
};

const Car = ({ id, name, color, status, time }: CarProps) => {
  const [engineStatus, setEngineStatus] = useState('stop');
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setEngineStatus(status);
    setDuration(time);
  }, [status, time]);

  return (
    <>
      <CarControls
        id={id}
        engineStatus={engineStatus}
        setEngineStatus={setEngineStatus}
        setDuration={setDuration}
      />
      <Lane>
        <CarTitle>{`${id} ${name}`}</CarTitle>
        <CarAnimated $duration={duration} $status={engineStatus}>
          <CarImage stroke={color} />
        </CarAnimated>
      </Lane>
    </>
  );
};

export default Car;
