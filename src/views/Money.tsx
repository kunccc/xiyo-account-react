import Layout from 'components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import React from 'react';

type Tags = {
  [key: string]: string
}

const LabelList = styled.div`
  max-height: 65vh;
  overflow: auto;
  margin-top: 5px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  ul {
    width: 358px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 66px;
      height: 66px;
      margin-top: 24px;
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #999;
      border-radius: 50%;
      &.selected {
        animation: chosen .5s ease both;
        border: none;
      }
    }
  }
  @keyframes chosen {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
      background: #ff8f78;
      color: #fff;
      box-shadow: 0 0 2.8px .4px #ff8f78;
    }
  }
`;
const Button = styled.button`
  width: 64vw;
  position: absolute;
  bottom: 96px;
  left: 18vw;
  padding: 4px 90px;
  background: #ff8f78;
  color: #fff;
  border: none;
  border-radius: 14px;
`;

const Money = () => {
  const [tags] = React.useState<Tags>({
    eat: '饮食',
    live: '住房',
    water: '水电',
    play: '娱乐'
  });
  const [selectedTag, setSelectedTag] = React.useState('');
  const selectTag = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };
  return (
    <Layout>
      <LabelList>
        <ul>
          {Object.keys(tags).map(tag =>
            <li onClick={() => selectTag(tag)} className={tag === selectedTag ? 'selected' : ''} key={tag}><Icon
              name={tag}/>{tags[tag]}</li>
          )}
        </ul>
      </LabelList>
      <Button>记一笔</Button>
    </Layout>
  );
};

export default Money;