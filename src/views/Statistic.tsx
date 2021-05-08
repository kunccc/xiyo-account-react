import Layout from 'components/Layout';
import React from 'react';

const Statistic: React.FC = () => {
  const selectTab = (selectedTab: string) => {console.log(selectedTab);};
  return (
    <Layout selectTab={selectTab}>
      <h2>数据</h2>
    </Layout>
  );
};

export default Statistic;