import { CarTitle, Lane, CarAnimated } from 'components/garage/car/Car.styled';
import CarImage from './CarImage';
import CarControls from './CarControls';

type CarProps = {
  id: number;
  name: string;
  color: string;
  status: string;
  time: number;
};

const Car = ({ id, name, color, status, time }: CarProps) => {
  return (
    <>
      <CarControls id={id} status={status} />
      <Lane>
        <CarTitle>{`${id} ${name}`}</CarTitle>
        <CarAnimated $duration={time} $status={status}>
          <CarImage stroke={color} status={status} time={time} />
        </CarAnimated>
      </Lane>
    </>
  );
};

export default Car;
