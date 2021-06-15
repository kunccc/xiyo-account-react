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

const StatisticWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .datepicker {
    padding: 20px 0;
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
  > li {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: auto;
    > ol {
      .date {
        background: #e9e9e9;
        font-size: 12px;
        padding: 3px 5px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      }
      > li {
        > ul {
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
`;

interface Props {
  notes: { date: string, items: { enName: string, chName: string, mark: string, detail: string }[] }[]
}

const Statistic: React.FC<Props> = props => {
  const [date, setDate] = useState(now().now);
  const currentNotes = props.notes.filter(note => note.date.slice(0, 7) === date);
  const notes = currentNotes.sort((a, b) => +b.date.replace(/-/g, '') - +a.date.replace(/-/g, ''));
  const friendlyDate = (note: { date: string }) => {
    if (now().fullNow === note.date) return '今天';
    if (+now().fullNow.replace(/-/g, '') - +note.date.replace(/-/g, '') === 1) return '昨天';
    return note.date;
  };
  return (
    <Layout>
      <StatisticWrapper>
        <div className="datepicker">
          <DatePicker onChange={(_: any, time: string) => setDate(time)} picker="month" locale={locale}
                      allowClear={false}
                      inputReadOnly defaultValue={Moment(Date.now())}/>
        </div>
        <Chart/>
        <li>
          {notes.map(note =>
            <ol key={note.date}>
              <div className="date">{friendlyDate(note)}</div>
              <li>
                {note.items.map(item =>
                  <ul key={item.enName}>
                    <div><Icon name={item.enName}/><span>{item.chName}</span><span>{item.mark}</span></div>
                    <span>{item.detail}</span>
                  </ul>)}
              </li>
            </ol>)}
        </li>
      </StatisticWrapper>
    </Layout>
  );
};

interface State {
  notes: []
}

const mapStateToProps = (state: State) => state.notes;
export default connect(mapStateToProps)(Statistic);