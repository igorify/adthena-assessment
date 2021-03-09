import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  background-color: #333;
  overflow: hidden;
`;

export const NavButton = styled(NavLink)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  
  &:hover {
    background-color: #ddd;
    color: black;
  }
  
  &.active {
    background-color: #4CAF50;
    color: white;
  }
  
  .icon {
    display: none;
  }
`;
