import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const TipWrapper = styled.div`
  opacity: 0;
  &.visible {
    opacity: 1;
  }
  > div {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -20px);
    color: #999;
    opacity: 0;
    &.iconDiv {
      animation: arise 1.5s .8s;
    }
    &.text {
      bottom: 8px;
      animation: arise 1.5s 1.85s;
    }
  }
  @keyframes arise {
    0% {
      transform: translate(-50%, 20px);
    }
    30% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    70% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
`;

interface Props {
  currentNotes: { date: string; items: { enName: string; chName: string; mark: string; detail: string; }[]; }[]
}

const Tip: React.FC<Props> = props => {
  return (
    <TipWrapper className={`tip2 ${props.currentNotes.length > 0 && 'visible'}`}>
      <div className="iconDiv"><Icon name="up"/></div>
      <div className="text">上滑查看详细数据</div>
    </TipWrapper>
  );
};

export default Tip;