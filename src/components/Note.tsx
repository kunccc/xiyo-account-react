import React, {useState} from 'react';
import Icon from './Icon';
import styled from 'styled-components';
import {DatePicker} from 'antd';
import 'antd/dist/antd.css';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Moment from 'moment';
import {connect} from 'react-redux';
import {now} from '../lib/now';

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
    margin: 20px;
    .icon {
      position: absolute;
      top: 15px;
      left: 10px;
      transform: scale(.7);
      color: #777;
    }
  }
  .ant-picker {
    width: 190px;
    height: 28px;
    margin-bottom: 18px;
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
  p {
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translateX(-50%);
    color: #ff8f78;
    font-size: 13px;
    z-index: -1;
    opacity: 0;
    white-space: nowrap;
    &.visible {
      animation: arise 1.2s ease both;
    }
    @keyframes arise {
      0% {
        transform: translate(-50%, 10px);
        opacity: 0;
      }
      35% {
        transform: translate(-50%, 0);
        opacity: 1;
      }
      65% {
        transform: translate(-50%, 0);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -10px);
        opacity: 0;
      }
    }
  }
`;

interface Props {
  isNoteVisible: boolean;
  selectedTagId: number;
  setSelectedTagId: (key: number) => void;
  setNoteVisible: (key: boolean) => void;
  setMaskVisible: (key: boolean) => void;
  setTip2Visible: (key: boolean) => void;
  addNote: (enName: string, chName: string, type: string, date: string, mark: string, amount: number) => void;
  tagsSource: { payTags: {id: number, enName: string, chName: string, type: string}[], incomeTags: {id: number, enName: string, chName: string, type: string}[] }
}

const Note: React.FC<Props> = (props) => {
  const [date, setDate] = useState(now().fullNow);
  const [mark, setMark] = useState('');
  const [amount, setAmount] = useState('');
  const [isTip1Visible, setTip1Visible] = useState(false);
  const [isTip2Visible, setTip2Visible] = useState(false);
  const regress = () => {
    props.setNoteVisible(false);
    props.setMaskVisible(false);
    setTimeout(() => {
      setDate(now().fullNow);
      setMark('');
      setAmount('');
    }, 250);
  };
  const onConfirm = () => {
    if (!amount) {
      setTip1Visible(true);
      setTimeout(() => setTip1Visible(false), 1200);
    } else if (parseInt(amount) <= 0) {
      setTip2Visible(true);
      setTimeout(() => setTip2Visible(false), 1200);
    } else {
      const tags = props.tagsSource.payTags.concat(props.tagsSource.incomeTags)
      const tag = tags.find(tag => tag.id === props.selectedTagId)
      props.addNote(tag!.enName, tag!.chName, tag!.type, date, mark, parseInt(amount));
      props.setSelectedTagId(0);
      props.setTip2Visible(true);
      setTimeout(() => props.setTip2Visible(false), 1200);
      regress();
    }
  };
  return (
    <NoteWrapper className={props.isNoteVisible ? 'visible' : ''}>
      <div className="title">
        <Icon name="back" onClick={regress}/>
        记一笔
      </div>
      <DatePicker onChange={(_: any, time: string) => setDate(time)} locale={locale} inputReadOnly
                  defaultValue={Moment(Date.now())} allowClear={false} showToday={false}/>
      <div className="mark">
        <span>备注</span>
        <input type="text" placeholder="在这里输入备注" value={mark} onChange={e => setMark(e.target.value)}/>
      </div>
      <div className="amount">
        <span>金额</span>
        <input type="number" placeholder="在这里输入金额" value={amount} onChange={e => setAmount(e.target.value)}/>
      </div>
      <button onClick={onConfirm} disabled={isTip1Visible || isTip2Visible}>确定</button>
      <p className={isTip1Visible ? 'visible' : ''}>您未输入金额！</p>
      <p className={isTip2Visible ? 'visible' : ''}>请输入正确的金额！</p>
    </NoteWrapper>
  );
};

interface State {
  tagsSource: { payTags: [], incomeTags: [] }
}

const mapStateToProps = (state: State) => state;
const mapDispatchToProps = (dispatch: Function) => {
  return {
    addNote: (enName: string, chName: string, type: string, date: string, mark: string, amount: number) => dispatch({
      type: 'add_note',
      payload: {enName, chName, type, date, mark, amount}
    })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Note);