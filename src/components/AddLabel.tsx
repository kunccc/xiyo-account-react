import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import {connect} from 'react-redux';

const AddLabelWrapper = styled.div`
  width: 250px;
  height: 190px;
  box-shadow: 0 0 2px #ff8f78;
  background: #fff;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;
  opacity: 0;
  transition: all 250ms;
  &.visible {
    z-index: 400;
    opacity: 1;
    transform: translate(-50%, 10px);
  }
  .title {
    margin: 18px 0 20px;
  }
  .tags {
    width: 170px;
    height: 32px;
    margin-bottom: 10px;
    z-index: 10;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 5px 0;
    .icon {
      margin: 0 5px;
      transition: all 250ms;
      &.selected {
        color: #ff8f78;
        transform: scale(1.2) !important;
      }
    }
  }
  .name {
    width: 136px;
    display: flex;
    margin: 5px;
    align-items: center;
    input {
      width: 102px;
      padding: 2px;
      margin-left: 5px;
      border-bottom: 1px solid #999;
    }
  }
  .actions {
    button {
      margin: 15px;
      border: none;
      background: #ff8f78;
      padding: 2px 19px;
      color: #fff;
      border-radius: 50px;
    }
  }
  p {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    color: #ff8f78;
    font-size: 13px;
    z-index: -1;
    white-space: nowrap;
    opacity: 0;
    &.visible {
      animation: arise 1.2s ease both;
    }
    @keyframes arise {
      0% {
        transform: translate(-50%, 10px);
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
        transform: translate(-50%, -10px);
        opacity: 0;
      }
    }
  }
`;

interface Props {
  tab: { selectedTab: string },
  tagsSource: { optionalTags: { id: number, enName: string }[] },
  isAddLabelVisible: boolean,
  setAddLabelVisible: (key: boolean) => void,
  setMaskVisible: (key: boolean) => void,
  addLabel: (tagId: number, tagName: string, tagType: string) => void,
  setTipVisible: (key: boolean) => void
}

const AddLabel: React.FC<Props> = props => {
  const [selectedTagId, setSelectedTagId] = useState(0);
  const [name, setName] = useState('');
  const [isTip1Visible, setTip1Visible] = useState(false);
  const [isTip2Visible, setTip2Visible] = useState(false);
  const regress = () => {
    props.setAddLabelVisible(false);
    props.setMaskVisible(false);
    setTimeout(() => {
      setSelectedTagId(0);
      setName('');
    }, 250);
  };
  const confirm = () => {
    if (!selectedTagId || !name) {
      setTip1Visible(true);
      setTimeout(() => setTip1Visible(false), 1200);
      return;
    }
    let nameLength = 0;
    let num;
    for (let i = 0; i < name.length; i++) {
      num = name.charCodeAt(i);
      if (num > 0 && num <= 127) {
        nameLength++;
      } else {
        nameLength += 2;
      }
    }
    if (nameLength > 8) {
      setTip2Visible(true);
      setTimeout(() => setTip2Visible(false), 1200);
      return;
    }
    props.addLabel(selectedTagId, name, props.tab.selectedTab);
    regress();
    props.setTipVisible(true);
    setTimeout(() => props.setTipVisible(false), 1200);
  };
  return (
    <AddLabelWrapper className={props.isAddLabelVisible ? 'visible' : ''}>
      <div className="title">????????????</div>
      <div className="tags">
        {props.tagsSource.optionalTags.map(tag =>
          <Icon key={tag.id} name={tag.enName} onClick={() => setSelectedTagId(tag.id)}
                className={selectedTagId === tag.id ? 'selected' : ''}/>
        )}
      </div>
      <div className="name">
        <span>??????</span>
        <input type="text" placeholder="?????????????????????" value={name}
               onChange={e => setName(e.target.value)}/>
      </div>
      <div className="actions">
        <button onClick={regress}>??????</button>
        <button onClick={confirm} disabled={isTip1Visible || isTip2Visible}>??????</button>
      </div>
      <p className={isTip1Visible ? 'visible' : ''}>??????????????????????????????</p>
      <p className={isTip2Visible ? 'visible' : ''}>????????????????????????</p>
    </AddLabelWrapper>
  );
};

interface State {
  tab: { selectedTab: string },
  tagsSource: { optionalTags: { id: number, enName: string }[] }
}

const mapStateToProps = (state: State) => state;
const mapDispatchToProps = (dispatch: Function) => {
  return {
    addLabel: (tagId: number, tagName: string, tagType: string) => dispatch({
      type: 'add_tag',
      payload: {tagId, tagName, tagType}
    })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddLabel);