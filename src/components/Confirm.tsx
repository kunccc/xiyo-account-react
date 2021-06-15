import styled from 'styled-components';
import React from 'react';

const ConfirmWrapper = styled.div`
  width: 250px;
  height: 132px;
  border: 1px solid #ff8f78;
  background: #fff;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  text-align: center;
  z-index: -1;
  opacity: 0;
  transition: all 250ms;
  &.visible {
    z-index: 500;
    opacity: 1;
    transform: translate(-50%, 10px);
  }
  .title {
    margin: 30px 0 10px;
  }
  .actions {
    button {
      margin: 25px 15px;
      border: none;
      background: #ff8f78;
      padding: 2px 19px;
      color: #fff;
      border-radius: 50px;
    }
  }
`;

interface Props {
  isConfirmVisible: boolean,
  setConfirmVisible: (key: boolean) => void,
  confirmDelete: (key: boolean) => void,
  tagName: string
}
const Confirm: React.FC<Props> = props => {
  return (
    <ConfirmWrapper className={props.isConfirmVisible ? 'visible' : ''}>
      <div className="title">您确定要删除标签 {props.tagName} 吗？</div>
      <div className="actions">
        <button onClick={() => props.confirmDelete(false)}>取消</button>
        <button onClick={() => props.confirmDelete(true)}>确定</button>
      </div>
    </ConfirmWrapper>
  );
};

export default Confirm;