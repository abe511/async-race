import styled from 'styled-components';

// drop-shadow changes during movement:
//  the shadow grows bigger and the less time the car travels, the more the shadow leans to -x
const CarSvg = styled.svg<{ stroke: string; status: string; time: number }>`
  height: 3rem;
  left: 0%;
  fill: ${({ status, stroke }) => (status === 'move' ? stroke : 'lemonchiffon')};
  fill-opacity: ${({ status }) => (status === 'move' ? 0.8 : 0.3)};
  stroke: ${({ stroke }) => stroke};
  stroke-width: 5;
  filter: drop-shadow(
    ${({ status, time, stroke }) =>
      status === 'move'
        ? `${(-15 + time / 1000).toString()}px 0px 10px ${stroke}`
        : `0px 0px 3px ${stroke}`}
  );
`;

export default CarSvg;
