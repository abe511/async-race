import styled from 'styled-components';

const CarSvg = styled.svg<{ stroke: string }>`
  height: 3rem;
  left: 0%;
  fill: lemonchiffon;
  fill-opacity: 0.3;
  border: 1px solid pink;
  stroke: ${(props) => props.stroke};
  stroke-width: 5;
  // filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.7));
  filter: drop-shadow(0 0 5px ${(props) => props.stroke});
`;
// stroke: ${(props: { strokeColor: string }) => props.strokeColor || 'red'};

export default CarSvg;
