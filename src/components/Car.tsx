import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CarImage from './CarImage';

const carContainerStyle: React.CSSProperties = {
  border: '1px solid red',
  display: 'flex',
  position: 'relative',
  // height: 'max-content',
  height: '5rem',
};

// const carStyle: React.CSSProperties = {
//   height: '5rem',
//   // position: 'absolute',
//   left: '0%',
//   fill: 'lemonchiffon',
//   // fill: 'none',
//   fillOpacity: '0.3',
//   border: '1px solid violet',
//   stroke: 'red',
//   strokeWidth: 5,
// };

// const sides = 20;

const moveRight = keyframes`
  0% {
    transform: translateX(0);
    animation-timing-function: ease-in;
  }
  70% {
    transform: translateX(calc(100vw - 100px)); /* Assuming the finish line is at 100vw */
    animation-timing-function: linear; /* Constant speed before finish line */
  }
  95% {
    transform: translateX(calc(100vw - 100px)); /* Maintain speed until braking starts */
    animation-timing-function: ease-out; /* Start braking */
  }
  100% {
    transform: translateX(calc(100vw - 150px)); /* Final position after braking */
    animation-timing-function: ease-out; /* Rapid deceleration */
  }
`;

// const moveRight = keyframes`
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(100%);
//   }
//   `;
// // transform: translateX(calc(100vw - ${sides}rem));

const CarAnimated = styled.div<{ $moving: string; $duration: number }>`
  border: 2px solid yellow;
  height: 5rem;
  position: absolute;
  left: 0%;
  animation: ${(props) => (props.$moving === 'true' ? moveRight : 'none')}
    ${(props) => props.$duration}s linear forwards;
`;

// animation: ${props => (props.isMoving ?)} ${moveRight} 3s linear forwards;

// const CarAnimated = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: blue;
//   animation: ${moveRight} 2s linear forwards;
// `;

// width: 100px;
// height: 100px;
// background-color: blue;
// animation: ${moveRight} 5s linear forwards;

// const handleSelect = (id, setSelected) => {
//   //
// };

type CarProps = {
  id: number;
  name: string;
  color: string;
  removeCar: RemoveCar;
  setCars: SetCars;
  setError: SetError;
  setSelected: SetSelected;
};

const Car = ({ id, name, color, removeCar, setCars, setError, setSelected }: CarProps) => {
  const [isMoving, setIsMoving] = useState(false);

  const duration = 2;

  const handleStart = () => {
    setIsMoving(true);
  };

  const handleStop = () => {
    setIsMoving(false);
  };

  return (
    <>
      <button type="button" onClick={() => setSelected(id)}>
        SELECT
      </button>
      <button type="button" onClick={() => removeCar(id, setCars, setError)}>
        REMOVE
      </button>
      <button type="button" onClick={handleStart}>
        START
      </button>
      <button type="button" onClick={handleStop}>
        STOP
      </button>
      <div style={carContainerStyle}>
        {`${id} ${name}`}
        <CarAnimated $moving={isMoving.toString()} $duration={duration}>
          {/* <CarImage style={carStyle} /> */}
          <CarImage stroke={color} />
        </CarAnimated>
      </div>
    </>
  );
};

export default Car;
