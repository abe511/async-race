import { useContext } from 'react';
import MainContext from '../context/MainContext';
import { ModalOverlay, Winner, Title, Text } from './WinnerModal.styled';

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
