import { SVGProps } from 'react';
import WinnersSvg from './WinnersIcons.styled';

export const AngleUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <WinnersSvg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 16 16" {...props}>
    <path d="m16.767 12.809-.754-.754-6.035 6.035.754.754 5.281-5.281 5.256 5.256.754-.754-3.013-3.013z" />
  </WinnersSvg>
);

export const AngleDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <WinnersSvg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 16 16" {...props}>
    <path d="m15.233 19.175.754.754 6.035-6.035-.754-.754-5.281 5.281-5.256-5.256-.754.754 3.013 3.013z" />
  </WinnersSvg>
);
