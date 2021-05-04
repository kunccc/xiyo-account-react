import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
    height: 48px;

    > li {
      width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="labels"/>
          <Link to="/labels">标签</Link>
        </li>
        <li>
          <Icon name="money"/>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name="statistic"/>
          <Link to="/statistic">数据</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;