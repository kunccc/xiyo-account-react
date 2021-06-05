import Layout from 'components/Layout';
import React, {useState} from 'react';
import Icon from 'components/Icon';
import styled from 'styled-components';
import 'styles/IconResetForLabels.scss';
import {connect} from 'react-redux';
import Confirm from '../components/Confirm';
import Mask from '../components/Mask';
import AddLabel from '../components/AddLabel';

const Ol = styled.ol`
  li {
    height: 46px;
    padding: 0 8px 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .tag {
      display: flex;
      align-items: flex-end;
      .icon {
        margin-right: 8px;
      }
    }
  }
`;
const P = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  color: #ff8f78;
  opacity: 0;
  &.visible {
    animation: arise 1.2s ease both;
  }
  @keyframes arise {
    0% {
      transform: translate(-50%, 12px);
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
      transform: translate(-50%, -12px);
      opacity: 0;
    }
  }
`;

interface Props {
  tags: { id: number, enName: string, chName: string, type: string }[],
  deleteTag: (tagId: number, tagType: string) => void
}
let tagIdClone: number, tagTypeClone: string, tagNameClone: string;

const Labels: React.FC<Props> = props => {
  const [isConfirmVisible, setConfirmVisible] = useState(false);
  const [isAddLabelVisible, setAddLabelVisible] = useState(false);
  const [isMaskVisible, setMaskVisible] = useState(false);
  const [isTipVisible, setTipVisible] = useState(false);
  const setDeletedItem = (tag: { id: number, type: string, chName: string }) => {
    tagIdClone = tag.id;
    tagTypeClone = tag.type;
    tagNameClone = tag.chName;
    setConfirmVisible(true);
    setMaskVisible(true);
  };
  const confirmDelete = (isDelete: boolean) => {
    if (isDelete) props.deleteTag(tagIdClone, tagTypeClone);
    setConfirmVisible(false);
    setMaskVisible(false);
  };
  const addLabel = () => {
    setAddLabelVisible(true);
    setMaskVisible(true);
  };
  return (
    <Layout>
      <Ol>
        {props.tags.map(tag =>
          <li key={tag.id}>
            <div className="tag"><Icon name={tag.enName}/>{tag.chName}</div>
            <Icon name="rubbish" onClick={() => setDeletedItem(tag)}/>
          </li>
        )}
        <li>添加新标签<Icon name="add" onClick={addLabel}/></li>
      </Ol>
      <Confirm isConfirmVisible={isConfirmVisible} setConfirmVisible={setConfirmVisible} confirmDelete={confirmDelete}
               tagName={tagNameClone}/>
      <AddLabel isAddLabelVisible={isAddLabelVisible} setAddLabelVisible={setAddLabelVisible}
                setMaskVisible={setMaskVisible} setTipVisible={setTipVisible}/>
      <Mask isMaskVisible={isMaskVisible}/>
      <P className={isTipVisible ? 'visible' : ''}>添加标签成功！</P>
    </Layout>
  );
};

interface State {
  tab: { selectedTab: string },
  tagsSource: { payTags: [], incomeTags: [] }
}
const mapStateToProps = (state: State) => {
  return state.tab.selectedTab === 'pay' ? {tags: state.tagsSource.payTags} : {tags: state.tagsSource.incomeTags};
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    deleteTag: (tagId: number, tagType: string) => {
      dispatch({type: 'delete_tag', payload: {tagId, tagType}});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Labels);