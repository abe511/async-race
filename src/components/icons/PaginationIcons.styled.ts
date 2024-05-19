import styled from 'styled-components';
import { styleColors } from 'styles/variables';

const PageSvg = styled.svg<{
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  disabled?: boolean;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  fill: ${({ fill, disabled }) => (disabled ? 'gray' : fill || styleColors.btnText.secondary)};
  fill-opacity: 0.5;
  stroke: ${({ stroke, disabled }) => (disabled ? 'gray' : stroke || styleColors.btnText.primary)};
  stroke: 'red';
  stroke-width: 1;
  stroke-opacity: 0.5;
  filter: drop-shadow(
    0 0 2px
      ${({ stroke, disabled }) => (disabled ? 'gray' : stroke || styleColors.btnText.secondary)}
  );
  &:hover {
    stroke: ${({ disabled }) => (disabled ? 'gray' : 'white')};
    fill: ${({ disabled }) => (disabled ? 'gray' : 'white')};
    fill-opacity: 0.9;
    filter: drop-shadow(
      0 0 3px ${({ disabled }) => (disabled ? 'none' : styleColors.btnText.secondary)}
    );
  }
`;

export default PageSvg;
