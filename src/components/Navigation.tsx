import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <button type="button">GARAGE</button>
      </Link>
      <Link to="/winners">
        <button type="button">WINNERS</button>
      </Link>
    </nav>
  );
};

export default Navigation;
