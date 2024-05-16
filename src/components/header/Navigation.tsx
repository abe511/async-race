import { Link } from 'react-router-dom';
import { NavigationContainer, NavButton } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Link to="/">
        <NavButton>GARAGE</NavButton>
      </Link>
      <Link to="/winners">
        <NavButton>WINNERS</NavButton>
      </Link>
    </NavigationContainer>
  );
};

export default Navigation;
