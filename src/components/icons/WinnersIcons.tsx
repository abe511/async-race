import WinnersSvg from './WinnersIcons.styled';

export const AngleUpIcon = ({ fill, stroke, ...props }: IconProps) => (
  <WinnersSvg viewBox="0 0 32 32" fill={fill} stroke={stroke} {...props}>
    <path d="M16.767 12.809l-0.754-0.754-6.035 6.035 0.754 0.754 5.281-5.281 5.256 5.256 0.754-0.754-3.013-3.013z" />
  </WinnersSvg>
);

export const AngleDownIcon = ({ fill, stroke, ...props }: IconProps) => (
  <WinnersSvg viewBox="0 0 32 32" fill={fill} stroke={stroke} {...props}>
    <path d="M15.233 19.175l0.754 0.754 6.035-6.035-0.754-0.754-5.281 5.281-5.256-5.256-0.754 0.754 3.013 3.013z" />
  </WinnersSvg>
);
