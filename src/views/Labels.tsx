import Layout from 'components/Layout';
import React from 'react';

const Labels: React.FC = () => {
  const selectTab = (selectedTab: string) => {console.log(selectedTab)}
  return (
    <Layout selectTab={selectTab}>
      <h2>标签</h2>
    </Layout>
  );
};

export default Labels;