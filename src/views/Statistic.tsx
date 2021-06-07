import Layout from 'components/Layout';
import React, {useState} from 'react';
import {DatePicker} from 'antd';
import {now} from '../lib/now';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import styled from 'styled-components';
import Moment from 'moment';

const StatisticWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  .ant-picker {
    width: 190px;
    height: 28px;
  }
  .chart {
    width: 200px;
    height: 200px;
    border: 1px solid #ff8f78;
    border-radius: 50%;
    margin-top: 60px;
  }
`;

const Statistic: React.FC = () => {
  const [date, setDate] = useState(now().now);
  return (
    <Layout>
      <StatisticWrapper>
        <DatePicker onChange={(_: any, time: string) => setDate(time)} picker="month" locale={locale} allowClear={false}
                    inputReadOnly defaultValue={Moment(Date.now())}/>
        <div className="chart"/>
      </StatisticWrapper>
    </Layout>
  );
};

export default Statistic;