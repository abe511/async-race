import { useContext } from 'react';
import GarageContext from '../context/GarageContext';
import { TrackContainer, Start, Finish } from './Track.styled';
import Car from './car/Car';

const Track = () => {
  const { cars } = useContext(GarageContext);

  return (
    <TrackContainer>
      <Start>START</Start>
      {cars.map((car: CarData) => {
        return (
          <Car
            key={car.id}
            id={car.id}
            name={car.name}
            color={car.color}
            status={car.status}
            time={car.time}
          />
        );
      })}
      <Finish>FINISH</Finish>
    </TrackContainer>
  );
};

export default Track;
