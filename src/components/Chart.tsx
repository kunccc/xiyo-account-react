import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import * as echarts from 'echarts';

const ChartWrapper = styled.div`
  border: 1px solid red;
  div {
    width: 100vw;
    height: 100vw;
  }
`;

const Chart: React.FC = () => {
  const chart = useRef(null);
  useEffect(() => {
    if (!chart.current) return;
    echarts.init(chart.current).setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {value: 1048, name: '搜索引擎'},
            {value: 735, name: '直接访问'},
            {value: 580, name: '邮件营销'},
            {value: 484, name: '联盟广告'},
            {value: 300, name: '视频广告'}
          ]
        }
      ]
    });
  }, []);
  return (
    <ChartWrapper>
      <div ref={chart}/>
    </ChartWrapper>
  );
};

export default Chart;