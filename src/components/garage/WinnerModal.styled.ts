import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(10, 10, 10, 0.7);
  z-index: 2000;
`;

export const Winner = styled.article`
  background-color: rgba(50, 50, 50, 0.9);
  width: 30%;
  border: 1px solid violet;
  padding: 1rem;
  border-radius: 0.5rem;
  z-index: 2100;
`;

export const Title = styled.p`
  font-size: largest;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: larger;
  font-weight: bold;
`;
