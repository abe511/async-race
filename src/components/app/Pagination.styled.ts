import styled from 'styled-components';
import { styleColors } from 'styles/variables';

export const PaginationContainer = styled.section`
  display: flex;
  align-self: center;
  align-items: center;
`;

export const PageButton = styled.button`
  display: flex;
  border-radius: 1rem;
  margin: 1rem;
`;

export const PageInfo = styled.span`
  width: 7rem;
  text-align: center;
  color: ${styleColors.text.primary};
  text-shadow: 0 0 5px ${styleColors.text.secondary};
  user-select: none;
`;
