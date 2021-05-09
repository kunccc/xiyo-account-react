import Layout from 'components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import React from 'react';
import {useTags} from 'lib/useTags';

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

const Money: React.FC = () => {
  const {tagsSourceForPay, tagsSourceForIncome} = useTags();
  const [tags, setTags] = React.useState(tagsSourceForPay);
  const selectTab = (selectedTab: string) => {
    setTags(selectedTab === 'pay' ? tagsSourceForPay : tagsSourceForIncome);
    setSelectedTagId(0);
  };
  const [selectedTagId, setSelectedTagId] = React.useState(0);
  const selectTag = (tagId: number) => {
    setSelectedTagId(tagId === selectedTagId ? 0 : tagId);
  };
  return (
    <Layout selectTab={selectTab}>
      <LabelList>
        <ul>
          {tags.map(tag =>
            <li onClick={() => selectTag(tag.id)} className={selectedTagId === tag.id ? 'selected' : ''}
                key={tag.id}><Icon name={tag.enName}/>{tag.chName}</li>
          )}
        </ul>
      </LabelList>
      <Button>记一笔</Button>
    </Layout>
  );
};

export default Money;