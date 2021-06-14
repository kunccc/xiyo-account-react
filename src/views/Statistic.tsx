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
  .chart {
    height: calc(100vh - 90px);
    .circle {
      width: 200px;
      height: 200px;
      border: 1px solid #ff8f78;
      border-radius: 50%;
      margin-top: 60px;
    }
  }
  > li {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: auto;
    > ul {
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
  console.log(props.notes);
  return (
    <Layout>
      <StatisticWrapper>
        <div className="datepicker">
          <DatePicker onChange={(_: any, time: string) => setDate(time)} picker="month" locale={locale}
                      allowClear={false}
                      inputReadOnly defaultValue={Moment(Date.now())}/>
        </div>
        <div className="chart">
          <div className="circle"/>
        </div>
        <li>
          {props.notes.map(note =>
            <ul key={note.date}>
              <div className="date">{note.date}</div>
              <li>
                {note.items.map(item =>
                  <ul key={item.enName}>
                    <div><Icon name={item.enName}/><span>{item.chName}</span><span>{item.mark}</span></div>
                    <span>{item.detail}</span>
                  </ul>)}
              </li>
            </ul>)}
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