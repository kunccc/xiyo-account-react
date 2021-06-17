import Layout from 'components/Layout';
import Icon from 'components/Icon';
import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import Note from 'components/Note';
import Mask from 'components/Mask';
import 'styles/IconResetForMoney.scss';
import {connect} from 'react-redux';

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
      border: 1px solid #ccc;
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
  width: 64%;
  position: absolute;
  bottom: 96px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 90px;
  background: #ff8f78;
  color: #fff;
  border: none;
  border-radius: 14px;
`;
const P = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translateX(-45%);
  color: #ff8f78;
  font-size: 13px;
  z-index: -1;
  opacity: 0;
  white-space: nowrap;
  &.visible {
    animation: arise 1.2s ease both;
  }
  @keyframes arise {
    0% {
      transform: translate(-45%, 10px);
      opacity: 0;
    }
    35% {
      transform: translate(-45%, 0);
      opacity: 1;
    }
    65% {
      transform: translate(-45%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-45%, -10px);
      opacity: 0;
    }
  }
`;

interface Props {
  tags: { id: number, enName: string, chName: string }[],
  selectedTab: string
}

const Money: React.FC<Props> = (props) => {
  const [selectedTagId, setSelectedTagId] = useState(0);
  const [isNoteVisible, setNoteVisible] = useState(false);
  const [isMaskVisible, setMaskVisible] = useState(false);
  const [isTip1Visible, setTip1Visible] = useState(false);
  const [isTip2Visible, setTip2Visible] = useState(false);
  const selectTag = (tagId: number) => setSelectedTagId(tagId === selectedTagId ? 0 : tagId);
  const makeANote = () => {
    if (selectedTagId === 0) {
      setTip1Visible(true);
      setTimeout(() => {setTip1Visible(false);}, 1200);
      return;
    }
    setNoteVisible(true);
    setMaskVisible(true);
  };
  useEffect(() => setSelectedTagId(0), [props.selectedTab]);
  return (
    <Layout>
      <LabelList>
        <ul>
          {props.tags.map(tag =>
            <li onClick={() => selectTag(tag.id)} className={selectedTagId === tag.id ? 'selected' : ''}
                key={tag.id}><Icon name={tag.enName}/>{tag.chName}</li>
          )}
        </ul>
      </LabelList>
      <Button onClick={() => makeANote()} disabled={isTip1Visible}>记一笔</Button>
      <Note isNoteVisible={isNoteVisible} setNoteVisible={setNoteVisible} setMaskVisible={setMaskVisible}
            selectedTagId={selectedTagId} setSelectedTagId={setSelectedTagId} setTip2Visible={setTip2Visible}/>
      <Mask isMaskVisible={isMaskVisible}/>
      <P className={isTip1Visible ? 'visible' : ''}>您未选择标签！</P>
      <P className={isTip2Visible ? 'visible' : ''}>记一笔成功！</P>
    </Layout>
  );
};

interface State {
  tab: { selectedTab: string },
  tagsSource: { payTags: [], incomeTags: [] }
}
const mapStateToProps = (state: State) => {
  return state.tab.selectedTab === 'pay'
    ? {tags: state.tagsSource.payTags, selectedTab: state.tab.selectedTab}
    : {tags: state.tagsSource.incomeTags, selectedTab: state.tab.selectedTab};
};

export default connect(mapStateToProps)(Money);