import styled from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.tr`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-family: 'RaceSport';
  border-top: 1px solid gray;
  padding: 0.5rem 0;
`;

export const Header = styled.th`
  position: relative;
  width: 100%;
`;

export const Cell = styled.td`
  display: flex;
  justify-content: center;
  width: 100%;
`;
