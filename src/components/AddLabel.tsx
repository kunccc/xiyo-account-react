import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import {connect} from 'react-redux';

const AddLabelWrapper = styled.div`
  width: 250px;
  height: 190px;
  border: 1px solid #ff8f78;
  background: #fff;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  opacity: 0;
  transition: all 250ms;
  &.visible {
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
    padding: 5px;
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
    width: 132px;
    display: flex;
    margin: 5px;
    align-items: center;
    input {
      width: 98px;
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
`;

interface Props {
  tab: { selectedTab: string },
  tagsSource: { optionalTags: { id: number, enName: string }[] },
  isAddLabelVisible: boolean,
  setAddLabelVisible: (key: boolean) => void,
  setMaskVisible: (key: boolean) => void,
  addLabel: (tagId: number, tagName: string, tagType: string) => void
}

const AddLabel: React.FC<Props> = props => {
  const [selectedTagId, setSelectedTagId] = useState(0);
  const [name, setName] = useState('');
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
      console.log('请选择标签并输入名称');
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
      console.log('名称最长8个字符');
      return;
    }
    props.addLabel(selectedTagId, name, props.tab.selectedTab);
    regress();
  };
  return (
    <AddLabelWrapper className={props.isAddLabelVisible ? 'visible' : ''}>
      <div className="title">添加标签</div>
      <div className="tags">
        {props.tagsSource.optionalTags.map(tag =>
          <Icon key={tag.id} name={tag.enName} onClick={() => setSelectedTagId(tag.id)}
                className={selectedTagId === tag.id ? 'selected' : ''}/>
        )}
      </div>
      <div className="name">
        <span>名称</span>
        <input type="text" placeholder="在这里输入名称" value={name}
               onChange={e => setName(e.target.value)}/>
      </div>
      <div className="actions">
        <button onClick={regress}>取消</button>
        <button onClick={confirm}>确定</button>
      </div>
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