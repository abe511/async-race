import { useContext } from 'react';
import { FlagIcon, CupIcon, StopwatchIcon } from 'components/icons/WinnerModalIcons';
import MainContext from '../context/MainContext';
import { ModalOverlay, Display, Title, WinnerName, WinnerTime } from './WinnerModal.styled';

const handleClose = (setWinnerModalData: SetState) => {
  setWinnerModalData((prev: WinnerModal) => ({ ...prev, isOpen: false }));
};

const WinnerModal = () => {
  const { winnerModalData, setWinnerModalData } = useContext(MainContext);

  if (!winnerModalData.isOpen) return null;
  return (
    <ModalOverlay onClick={() => handleClose(setWinnerModalData)}>
      <Display>
        {winnerModalData.id === -1 ? (
          <Title>No winner</Title>
        ) : (
          <>
            <FlagIcon fill="white" stroke="black" width={64} height={64} />
            <Title>WINNER</Title>
            <div>
              <WinnerName>
                <CupIcon width={24} height={24} />
                <span>
                  {winnerModalData.id} {winnerModalData.name}
                </span>
              </WinnerName>
            </div>
            <div>
              <WinnerTime>
                <StopwatchIcon width={24} height={24} />
                <span>{winnerModalData.time / 1000}</span>
              </WinnerTime>
            </div>
          </>
        )}
      </Display>
    </ModalOverlay>
  );
};

export default WinnerModal;
