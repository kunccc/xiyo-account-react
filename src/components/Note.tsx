import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

const NoteWrapper = styled.div`
  width: 250px;
  height: 240px;
  border: 1px solid #ff8f78;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  z-index: -1;
  transition: all 250ms;
  &.visible {
    opacity: 1;
    z-index: 10;
    transform: translate(-50%, 10px);
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
    .icon {
      position: absolute;
      top: 15px;
      left: 10px;
      transform: scale(.7);
      color: #777;
    }
  }
  .datePicker {
    border: 1px solid #ccc;
    height: 25px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .mark, .amount {
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    span {
      color: #555;
    }
    input {
      margin-left: 12px;
      border-bottom: 1px solid #ccc;
      padding: 4px;
      width: 140px;
    }
  }
  button {
    padding: 2px 30px;
    background: #ff8f78;
    color: #fff;
    border: none;
    border-radius: 50px;
  }
`;

type Props = {
  isNoteVisible: boolean;
  setNoteVisible: (key: boolean) => void;
  setMaskVisible: (key: boolean) => void
}

const Note: React.FC<Props> = (props) => {
  const back = () => {
    props.setNoteVisible(false);
    props.setMaskVisible(false);
  };
  return (
    <NoteWrapper className={props.isNoteVisible ? 'visible' : ''}>
      <div className="title">
        <div onClick={() => back()}><Icon name="back"/></div>
        记一笔
      </div>
      <div className="datePicker">日期选择器</div>
      <div className="mark">
        <span>备注</span>
        <input type="text" placeholder="在这里输入备注"/>
      </div>
      <div className="amount">
        <span>金额</span>
        <input type="number" placeholder="在这里输入金额"/>
      </div>
      <button>确定</button>
    </NoteWrapper>
  );
};

export default Note;