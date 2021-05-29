import Layout from 'components/Layout';
import Icon from 'components/Icon';
import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from 'lib/useTags';
import Note from 'components/Note';
import Mask from 'components/Mask';
import 'styles/IconResetForMoney.scss';

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
      border: 1px solid #aaa;
      border-radius: 50%;
      .icon {
        margin-bottom: 2px;
      }
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
const Tip = styled.div`
  color: #ff8f78;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  &.triggered {
    animation: arise 1.2s ease both;
  }
  @keyframes arise {
    0% {
      transform: translate(-50%, 15px);
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
      transform: translate(-50%, -15px);
      opacity: 0;
    }
  }
`;

const Money: React.FC = () => {
  const {payTags, incomeTags} = useTags();
  const [tags, setTags] = useState(payTags);
  const selectTab = (selectedTab: string) => {
    setTags(selectedTab === 'pay' ? payTags : incomeTags);
    setSelectedTagId(0);
  };
  const [selectedTagId, setSelectedTagId] = useState(0);
  const selectTag = (tagId: number) => {
    setSelectedTagId(tagId === selectedTagId ? 0 : tagId);
  };
  const [isTriggered, setTriggered] = useState(false);
  const makeANote = () => {
    if (selectedTagId === 0) {
      setTriggered(true);
      setTimeout(() => {setTriggered(false);}, 1200);
      return;
    }
    setNoteVisible(true);
    setMaskVisible(true);
  };
  const [isNoteVisible, setNoteVisible] = useState(false);
  const [isMaskVisible, setMaskVisible] = useState(false);
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
      <Button onClick={() => makeANote()} disabled={isTriggered}>记一笔</Button>
      <Tip className={isTriggered ? 'triggered' : ''}>您未选择标签！</Tip>
      <Note isNoteVisible={isNoteVisible} setNoteVisible={setNoteVisible} setMaskVisible={setMaskVisible}/>
      <Mask isMaskVisible={isMaskVisible}/>
    </Layout>
  );
};

export default Money;