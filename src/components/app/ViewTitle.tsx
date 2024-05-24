import { useContext } from 'react';
import {
  ViewTitleContainer,
  TitleText,
  TotalItems,
  Message,
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
      <Message>{error}</Message>
    </ViewTitleContainer>
  );
};

export default ViewTitle;
