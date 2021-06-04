import Layout from 'components/Layout';
import React from 'react';
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
  }
`;

const Labels: React.FC = () => {
  return (
    <Layout>
      <Ol>
        {/*{tags.map(tag =>*/}
        {/*  <li key={tag.id}>*/}
        {/*    <div className="tag"><Icon name={tag.enName}/>{tag.chName}</div>*/}
        {/*    <Icon name="rubbish" onClick={() => deleteTag(tag.id, tag.type)}/>*/}
        {/*  </li>*/}
        {/*)}*/}
        {/*<li>添加新标签<Icon name="add"/></li>*/}
      </Ol>
    </Layout>
  );
};

export default Labels;