import styled from 'styled-components';
import { styleColors } from 'styles/variables';

const WinnerModalSvg = styled.svg<{
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  fill: ${({ fill }) => fill || styleColors.btnText.secondary};
  stroke: ${({ stroke }) => stroke || styleColors.btnText.primary};
  stroke-width: 1;
  stroke-opacity: 0.5;
  filter: drop-shadow(0 0 2px ${({ stroke }) => stroke});
`;

export default WinnerModalSvg;
