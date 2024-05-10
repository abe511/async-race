import { useContext } from 'react';
import GarageContext from './context/GarageContext';

type TitleProps = {
  title: string;
};
const Title = ({ title }: TitleProps) => {
  const { error } = useContext(GarageContext);

  return (
    <section>
      <h3>{title}</h3>
      <span>{error}</span>
    </section>
  );
};

export default Title;
