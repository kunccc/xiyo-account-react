import Layout from 'components/Layout';
import React from 'react';
import Icon from 'components/Icon';
import styled from 'styled-components';
import 'styles/IconResetForLabels.scss';
import {connect} from 'react-redux';

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

type Props = {
  tags: { id: number, enName: string, chName: string, type: string }[],
  deleteTag: (tagId: number, tagType: string) => void
}
const Labels: React.FC<Props> = props => {
  return (
    <Layout>
      <Ol>
        {props.tags.map(tag =>
          <li key={tag.id}>
            <div className="tag"><Icon name={tag.enName}/>{tag.chName}</div>
            <Icon name="rubbish" onClick={() => props.deleteTag(tag.id, tag.type)}/>
          </li>
        )}
        <li>添加新标签<Icon name="add"/></li>
      </Ol>
    </Layout>
  );
};

type State = {
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