import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
    height: 48px;

    li {
      width: 33.33%;
      text-align: center;

      a {
        height: 100%;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/labels">
            <Icon name="labels"/>
            标签
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money"/>
            记账
          </Link>
        </li>
        <li>
          <Link to="/statistic">
            <Icon name="statistic"/>
            数据
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;