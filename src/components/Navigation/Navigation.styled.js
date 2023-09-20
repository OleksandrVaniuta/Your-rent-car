import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainerList = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 20px;
  top: 30%;
  left: calc(50% - 680px);
  transform: translate(-50%, -50%);
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 14px;
  padding: 5px;
  gap: 5px 0;
  z-index: 1000;
  background-color: ${props => props.location === '/' && '#fff'};
`;

export const NavContainerItem = styled.li``;

export const NaviationLink = styled(NavLink)`
  display: block;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.blue};
  border-radius: 14px;
  transition: border-color 0.5s ease-in-out;
  transition: color 0.5s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  &.active {
    border: 3px solid ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.darkBlue};
    stroke: ${({ theme }) => theme.colors.darkBlue};
    stroke-opacity: 0.5;
  }
`;

// style={{ color: '#3470FF' }}
