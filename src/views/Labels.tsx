import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'lib/useTags';
import Icon from 'components/Icon';
import styled from 'styled-components';
import 'styles/IconResetForLabels.scss';

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
    .action {
      display: flex;
      align-items: center;
    }
  }
`;

const Labels: React.FC = () => {
  const {tags, deleteTag} = useTags();
  return (
    <Layout>
      <Ol>
        {tags.map(tag =>
          <li key={tag.id}>
            <div className="tag"><Icon name={tag.enName}/>{tag.chName}</div>
            <div className="action" onClick={() => deleteTag(tag.id, tag.type)}><Icon name="rubbish"/></div>
          </li>
        )}
        <li>添加新标签<Icon name="add"/></li>
      </Ol>
    </Layout>
  );
};

export default Labels;