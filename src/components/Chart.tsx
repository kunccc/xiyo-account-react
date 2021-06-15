import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import * as echarts from 'echarts';

const ChartWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 148px);
  scroll-snap-align: start;
  .chart {
    width: 100vw;
    height: 100vw;
  }
  .total {
    text-align: center;
    opacity: 0;
    transition: all 250ms;
    &.visible {
      opacity: 1;
    }
    p:last-child {
      color: #ff8f78;
    }
  }
`;

interface Props {
  data: { value: string, name: string }[];
  tab: string;
  total: number
}

const Chart: React.FC<Props> = props => {
  const chart = useRef(null);
  useEffect(() => {
    echarts.init(chart.current!).setOption({
      color: [
        '#FF8D78',
        '#FFAA78',
        '#FFD578',
        '#FFFC78',
        '#78FFB2',
        '#78FFEC',
        '#78D9FF',
        '#7887FF'
      ],
      tooltip: {
        trigger: 'item'
      },
      legend: {
        left: 'center'
      },
      series: [
        {
          type: 'pie',
          radius: ['26%', '70%'],
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '24',
              fontWeight: 'bold',
              color: '#FF8D78'
            }
          },
          labelLine: {
            show: false
          },
          data: props.data
        }
      ]
    });
  }, [props.data]);
  return (
    <ChartWrapper>
      <div ref={chart} className="chart"/>
      <div className={`total ${props.data.length < 1 ? '' : 'visible'}`}>
        <p>当月{props.tab === 'pay' ? '支出' : '收入'}总计</p>
        <p>{props.total}</p>
      </div>
    </ChartWrapper>
  );
};

export default Chart;