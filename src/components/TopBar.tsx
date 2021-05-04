import styled from 'styled-components';

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
    &:first-child {
      background: #ff8f78;
      color: #fff;
      box-shadow: 0 0 2px .3px #ff8f78;
    }
  }
`;

const TopBar = () => {
  return (
    <TopBarWrapper>
      <button>支出</button>
      <button>收入</button>
    </TopBarWrapper>
  );
};

export default TopBar;