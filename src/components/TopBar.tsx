import styled from 'styled-components';
import React from 'react';
import {connect} from 'react-redux';

const TopBarWrapper = styled.div`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  button {
    width: 98px;
    height: 25.2px;
    border: none;
    border-radius: 8px;
    background: #f1f1f1;
    color: #ff8f78;
    &.selected {
      background: #ff8f78;
      color: #fff;
      box-shadow: 0 0 2px .3px #ff8f78;
    }
  }
`;

interface Props {
  tabs: { pay: string, income: string },
  selectedTab: string,
  switchToPay: () => void,
  switchToIncome: () => void
}

const TopBar: React.FC<Props> = (props) => {
  const {tabs, selectedTab, switchToPay, switchToIncome} = props;
  type Keys = keyof typeof tabs
  const tabMap: Keys[] = ['pay', 'income'];
  const onSwitch = (tab: string) => {
    tab === 'pay' ? switchToPay() : switchToIncome();
  };
  return (
    <TopBarWrapper>
      {tabMap.map(tab =>
        <button key={tab} className={selectedTab === tab ? 'selected' : ''}
                onClick={() => onSwitch(tab)}>{tabs[tab]}</button>
      )}
    </TopBarWrapper>
  );
};

interface State {
  tab: {
    tabs: { pay: string, income: string },
    selectedTab: string
  }
}
const mapStateToProps = (state: State) => state.tab;
const mapDispatchToProps = (dispatch: Function) => {
  return {
    switchToPay: () => dispatch({type: 'switch_pay'}),
    switchToIncome: () => dispatch({type: 'switch_income'})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);