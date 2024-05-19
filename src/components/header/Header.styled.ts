import styled from 'styled-components';

export const HeaderContainer = styled.header`
  // border: 2px solid brown;
  display: flex;
  flex-direction: row-reverse;
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 2px solid burlywood;
  flex-grow: 1;
  margin: auto 0;
  color: aqua;
  font-size: 2rem;
  font-style: italic;
  font-weight: bolder;
  text-shadow: 0 0 10px rgba(0, 255, 128, 0.7);
`;
