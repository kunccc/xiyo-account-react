import React from 'react';
import styled from 'styled-components';

const AddLabelWrapper = styled.div`
  width: 250px;
  height: 196px;
  border: 1px solid #ff8f78;
  background: #fff;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  opacity: 0;
  transition: all 250ms;
  &.visible {
    opacity: 1;
    transform: translate(-50%, 10px);
  }
  .title {
    margin: 18px 0 20px;
  }
  .tags {
    border: 1px solid red;
    width: 150px;
    height: 25px;
  }
  .indicator {
    width: 5px;
    height: 5px;
    border: 1px solid #333;
    border-radius: 50%;
    margin: 2px 0 10px;
  }
  .name {
    width: 132px;
    display: flex;
    margin: 5px;
    align-items: center;
    input {
      width: 98px;
      padding: 2px;
      margin-left: 5px;
      border-bottom: 1px solid #999;
    }
  }
  .actions {
    button {
      margin: 15px;
      border: none;
      background: #ff8f78;
      padding: 2px 19px;
      color: #fff;
      border-radius: 50px;
    }
  }
`;

type Props = {
  isAddLabelVisible: boolean,
  setAddLabelVisible: (key: boolean) => void
}
const AddLabel: React.FC<Props> = props => {
  return (
    <AddLabelWrapper className={props.isAddLabelVisible ? 'visible' : ''}>
      <div className="title">添加标签</div>
      <div className="tags"/>
      <div className="indicator"/>
      <div className="name">
        <span>名称</span>
        <input type="text" placeholder="在这里输入名称"/>
      </div>
      <div className="actions">
        <button>取消</button>
        <button>确定</button>
      </div>
    </AddLabelWrapper>
  );
};

export default AddLabel;