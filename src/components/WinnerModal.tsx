import { useContext } from 'react';
import styled from 'styled-components';
import MainContext from './context/MainContext';

const ModalOverlay = styled.div`
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

const Winner = styled.article`
  background-color: rgba(50, 50, 50, 0.9);
  width: 30%;
  border: 1px solid violet;
  padding: 1rem;
  border-radius: 0.5rem;
  z-index: 2100;
`;

const Title = styled.p`
  font-size: largest;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: larger;
  font-weight: bold;
`;

const handleClose = (setWinnerModalData: SetState) => {
  setWinnerModalData((prev: WinnerModal) => ({ ...prev, isOpen: false }));
};

const WinnerModal = () => {
  const { winnerModalData, setWinnerModalData } = useContext(MainContext);

  if (!winnerModalData.isOpen) return null;

  return (
    <ModalOverlay onClick={() => handleClose(setWinnerModalData)}>
      <Winner>
        {winnerModalData.id === -1 ? (
          <Text>No winner</Text>
        ) : (
          <>
            <Title>WINNER</Title>
            <Text>{winnerModalData.id}</Text>
            <Text>{winnerModalData.name}</Text>
            <Text>{winnerModalData.time / 1000} seconds</Text>
          </>
        )}
      </Winner>
    </ModalOverlay>
  );
};

export default WinnerModal;
