import Layout from 'components/Layout';
import React, {useState} from 'react';
import {DatePicker} from 'antd';
import {now} from '../lib/now';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import styled from 'styled-components';
import Moment from 'moment';
import {connect} from 'react-redux';
import Icon from '../components/Icon';
import Chart from '../components/Chart';
import Tip from '../components/Tip';

const StatisticWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .datepicker {
    padding: 15px 0;
    position: fixed;
    width: 100%;
    text-align: center;
    background: #fff;
    z-index: 1;
    .ant-picker {
      width: 190px;
      height: 28px;
    }
  }
  .page {
    height: calc(100vh - 148px);
    width: 100%;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    margin-top: 60px;
    position: relative;
    &.noData {
      height: calc(100vh - 150px);
      overflow: hidden;
    }
    > ol {
      scroll-snap-align: start;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 148px);
      > li {
        .date {
          background: #e9e9e9;
          font-size: 12px;
          padding: 2px 5px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        }
        > ul {
          > li {
            display: flex;
            padding: 10px;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            > div {
              display: flex;
              align-items: flex-end;
              > span {
                margin-left: 4px;
                &:last-child {
                  color: #bbb;
                  font-size: 12px;
                  margin-left: 8px;
                  max-width: calc(100vw - 160px);
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
            > span {
              color: #ff8f78;
            }
          }
        }
      }
    }
    .tip {
      position: fixed;
      top: 110px;
      left: 50%;
      transform: translateX(-50%);
      color: #ff8f78;
      opacity: 0;
      transition: all 250ms;
      &.visible {
        opacity: 1;
      }
    }
  }
`;

interface Props {
  notes: { date: string, items: { enName: string, chName: string, mark: string, detail: string }[] }[];
  selectedTab: string
}

const Statistic: React.FC<Props> = props => {
  const [date, setDate] = useState(now().now);
  const currentNotes = props.notes.filter(note => note.date.slice(0, 7) === date) || [];
  const notes = currentNotes.sort((a, b) => +b.date.replace(/-/g, '') - +a.date.replace(/-/g, ''));
  const friendlyDate = (note: { date: string }) => {
    if (now().fullNow === note.date) return '今天';
    if (+now().fullNow.replace(/-/g, '') - +note.date.replace(/-/g, '') === 1) return '昨天';
    return note.date;
  };
  let data = [];
  for (let note of currentNotes) {
    outer: for (let item of note.items) {
      const tab = item.detail.slice(0, 1) === '-' ? 'pay' : 'income';
      if (tab === props.selectedTab) {
        for (let dataItem of data) {
          if (dataItem.name === item.chName) {
            dataItem.value = (+dataItem.value + +item.detail.substr(1)).toString();
            continue outer;
          }
        }
        data.push({value: item.detail.substr(1), name: item.chName});
      }
    }
  }
  let total = 0;
  data.forEach(item => total += +item.value);
  return (
    <Layout>
      <StatisticWrapper>
        <div className="datepicker">
          <DatePicker onChange={(_: any, time: string) => setDate(time)} picker="month" locale={locale}
                      allowClear={false} inputReadOnly defaultValue={Moment(Date.now())}/>
        </div>
        <div className={`page ${currentNotes.length < 1 ? 'noData' : ''}`}>
          <Chart data={data} tab={props.selectedTab} total={total}/>
          <ol>
            {notes.map(note =>
              <li key={note.date}>
                <div className="date">{friendlyDate(note)}</div>
                <ul>
                  {note.items.map((item, index) =>
                    <li key={index}>
                      <div><Icon name={item.enName}/><span>{item.chName}</span><span>{item.mark}</span></div>
                      <span>{item.detail}</span>
                    </li>)}
                </ul>
              </li>)}
          </ol>
          <p className={`tip ${data.length < 1 ? 'visible' : ''}`}>当月暂无数据</p>
          <Tip currentNotes={currentNotes}/>
        </div>
      </StatisticWrapper>
    </Layout>
  );
};

interface State {
  notes: { notes: [] };
  tab: { selectedTab: string }
}

const mapStateToProps = (state: State) => {
  return {...state.notes, ...state.tab};
};
export default connect(mapStateToProps)(Statistic);