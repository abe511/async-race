import { HeaderContainer, Title } from 'components/header/Header.styled';
import Navigation from './Navigation';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>ASYNC RACE</Title>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
