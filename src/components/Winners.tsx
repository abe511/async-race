import Pagination from './Pagination';
import Title from './Title';

const Winners = () => {
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
          <tr>
            <td>1</td>
            <td>image</td>
            <td>car</td>
            <td>number</td>
            <td>time</td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default Winners;
