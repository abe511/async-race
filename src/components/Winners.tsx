import { useContext } from 'react';
import Pagination from './Pagination';
import Title from './Title';
import GarageContext from './context/GarageContext';
import CarImage from './car/CarImage';

const Winners = () => {
  const { cars } = useContext(GarageContext);
  return (
    <>
      <Title title="WINNERS" />
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
      <Pagination />
    </>
  );
};

export default Winners;
