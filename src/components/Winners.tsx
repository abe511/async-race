import { useContext } from 'react';
import { winnersPageLimit } from 'utils/data';
import MainContext from './context/MainContext';
import GarageContext from './context/GarageContext';
import Title from './Title';
import CarImage from './car/CarImage';
import Pagination from './Pagination';

const Winners = () => {
  const { cars } = useContext(GarageContext);
  const { totalItems } = useContext(MainContext);

  return (
    <>
      <Title title="WINNERS" total={totalItems.winners} />
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>CAR</th>
            <th>NAME</th>
            <th>WINS</th>
            <th>BEST TIME (SECONDS)</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => {
            return (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>
                  <CarImage stroke={car.color} />
                </td>
                <td>{car.name}</td>
                <td>{car.wins}</td>
                <td>{car.bestTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination view="winners" limit={winnersPageLimit} total={totalItems.winners} />
    </>
  );
};

export default Winners;
