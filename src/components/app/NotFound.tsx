import { NotFoundStatus, NotFoundText } from './MainContainer.styled';

const NotFound = () => {
  return (
    <>
      <NotFoundStatus>404</NotFoundStatus>
      <NotFoundText>Page not found</NotFoundText>
    </>
  );
};

export default NotFound;
