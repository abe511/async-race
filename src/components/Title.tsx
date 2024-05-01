import { useContext } from 'react';
import GarageContext from './context/GarageContext';

type TitleProps = {
  title: string;
};
const Title = ({ title }: TitleProps) => {
  const { error } = useContext(GarageContext);

  return (
    <h3>
      {title} {error}
    </h3>
  );
};

export default Title;
