import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeNavBtn = styled(NavLink)`
  padding: 10px 40px 10px 40px;
  dispay: block;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: ${({ theme }) => theme.fontSizes[8]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainWhite};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: background-color 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
  border-radius: 24px;

  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
`;
