import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import CarImage from './CarImage';
import CarControls from './CarControls';

const carContainerStyle: React.CSSProperties = {
  border: '1px solid red',
  display: 'flex',
  position: 'relative',
  // height: 'max-content',
  height: '5rem',
};

const moveRight = keyframes`
  0% {
    transform: translateX(0);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(calc(100vw - 11rem)); /* Final position after braking */
    animation-timing-function: ease-out; /* Rapid deceleration */
  }
`;

const CarAnimated = styled.div<{ $duration: number; $status: string }>`
  border: 2px solid yellow;
  height: 5rem;
  position: absolute;
  left: 0%;
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
      <div style={carContainerStyle}>
        {`${id} ${name}`}
        <CarAnimated $duration={duration} $status={engineStatus}>
          <CarImage stroke={color} />
        </CarAnimated>
      </div>
    </>
  );
};

export default Car;
