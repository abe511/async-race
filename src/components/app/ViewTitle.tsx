import { useContext } from 'react';
import {
  ViewTitleContainer,
  TitleText,
  TotalItems,
  Subtitle,
} from 'components/app/ViewTitle.styled';
import GarageContext from '../context/GarageContext';

type ViewTitleProps = {
  title: string;
  total: number;
};

const ViewTitle = ({ title, total }: ViewTitleProps) => {
  const { error } = useContext(GarageContext);

  return (
    <ViewTitleContainer>
      <TitleText>{title}</TitleText>
      <TotalItems>{total}</TotalItems>
      <Subtitle>{error}</Subtitle>
    </ViewTitleContainer>
  );
};

export default ViewTitle;
