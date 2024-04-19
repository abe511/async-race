import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <button type="button">Garage</button>
      </Link>
      <Link to="/winners">
        <button type="button">Winners</button>
      </Link>
    </nav>
  );
};

export default Navigation;
