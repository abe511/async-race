import { useContext } from 'react';
import styled from 'styled-components';
import GarageContext from './context/GarageContext';

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(10, 10, 10, 0.5);
`;

const Winner = styled.article`
  background-color: rgba(50, 50, 50, 0.8);
  width: 30%;
  border: 1px solid violet;
  padding: 1rem;
  border-radius: 0.5rem;
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
  setWinnerModalData((prev: WinnerModal) => ({ ...prev, open: false }));
};

const WinnerModal = () => {
  const { winnerModalData, setWinnerModalData } = useContext(GarageContext);

  if (!winnerModalData.open) return null;

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