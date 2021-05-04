import React from 'react';
import {NavLink} from 'react-router-dom';
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

        &.selected {
          color: #ff8f78;

          .icon {
            fill: #ff8f78;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/labels" activeClassName="selected">
            <Icon name="labels"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistic" activeClassName="selected">
            <Icon name="statistic"/>
            数据
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;