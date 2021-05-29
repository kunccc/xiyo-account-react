import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from 'lib/useTags';

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

const TopBar: React.FC = () => {
  const {selectedTab, setSelectedTab} = useTags();
  const tabMap = {pay: '支出', income: '收入'};
  type Keys = keyof typeof tabMap
  const [tabs] = useState<Keys[]>(['pay', 'income']);
  return (
    <TopBarWrapper>
      {tabs.map(type =>
        <button className={selectedTab === type ? 'selected' : ''} onClick={() => setSelectedTab(type)}
                key={type}>{tabMap[type]}</button>
      )}
    </TopBarWrapper>
  );
};

export default TopBar;