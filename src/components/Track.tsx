import { useContext } from 'react';
import styled from 'styled-components';
import GarageContext from './context/GarageContext';
import Car from './car/Car';

const TrackStyled = styled.section`
  display: grid;
  grid-template-columns: var(--car-controls-w) var(--car-width) 1rem 1fr 1rem var(--car-width);
  grid-auto-rows: minmax(3rem, auto);
  grid-row-gap: 10px;
  width: 100%;
  min-height: 3rem;
  height: max-content;
  border: 2px solid yellow;
  user-select: none;
  position: relative;
`;

const StartStyled = styled.div`
  grid-column: 3 / 4;
  grid-row: 1;
  border: var(--line-border-w) solid red;
  writing-mode: vertical-lr;
  height: 100%;
  width: 1rem;
  line-height: 0.8rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const FinishStyled = styled.div`
  grid-column: 5 / 6;
  grid-row: 1;
  border: var(--line-border-w) solid blue;
  writing-mode: vertical-lr;
  height: 100%;
  width: 1rem;
  line-height: 0.8rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Track = () => {
  const { cars } = useContext(GarageContext);

  return (
    <TrackStyled>
      <StartStyled>START</StartStyled>
      {cars.map((car: CarData) => {
        return (
          <Car
            key={car.id}
            id={car.id}
            name={car.name}
            color={car.color}
            status={car.status}
            time={car.time}
          />
        );
      })}
      <FinishStyled>FINISH</FinishStyled>
    </TrackStyled>
  );
};

export default Track;
