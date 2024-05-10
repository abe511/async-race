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
  // height: 10%;
  border: 1px solid red;
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
        <h3>WINNER</h3>
        <p>{winnerModalData.id}</p>
        <p>{winnerModalData.name}</p>
        <p>{winnerModalData.time / 1000} seconds</p>
      </Winner>
    </ModalOverlay>
  );
};

export default WinnerModal;
