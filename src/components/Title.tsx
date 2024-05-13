import { useContext } from 'react';
import styled from 'styled-components';
import GarageContext from './context/GarageContext';

const TitleStyled = styled.section`
  border: 2px solid violet;
  text-align: center;
`;

const Subtitle = styled.p`
  color: hotpink;
  text-shadow: 0 0 10px rgba(255, 43, 191, 0.9);
`;

type TitleProps = {
  title: string;
  total: number;
};

const Title = ({ title, total }: TitleProps) => {
  const { error } = useContext(GarageContext);

  return (
    <TitleStyled>
      <h3>{title}</h3>
      <span>{total}</span>
      <Subtitle>{error}</Subtitle>
    </TitleStyled>
  );
};

export default Title;
