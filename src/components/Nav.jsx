import React from 'react';
import {
  NavWrapper,
  NavButton
} from '@components/styled-components/Nav';

const Nav = () => (
  <NavWrapper>
    <NavButton
      activeClassName="active"
      exact
      to="/"
    >
      Task One
    </NavButton>
    <NavButton
      activeClassName="active"
      to="/task-two"
    >
      Task Two
    </NavButton>
    <NavButton
      activeClassName="active"
      to="/modals-demo"
    >
      Modals Demo Page
    </NavButton>
  </NavWrapper>
);

export default Nav;
