import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
    align-items: center;
    height: 48px;

    > li {
      width: 33.33%;
      text-align: center;
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/labels">标签</Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/statistic">数据</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;