import { useState, useEffect } from 'react';
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
  const [engineStatus, setEngineStatus] = useState('stop');
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setEngineStatus(status);
    setDuration(time);
  }, [status, time]);

  return (
    <>
      <CarControls
        id={id}
        engineStatus={engineStatus}
        setEngineStatus={setEngineStatus}
        setDuration={setDuration}
      />
      <Lane>
        <CarTitle>{`${id} ${name}`}</CarTitle>
        <CarAnimated $duration={duration} $status={engineStatus}>
          <CarImage stroke={color} />
        </CarAnimated>
      </Lane>
    </>
  );
};

export default Car;
