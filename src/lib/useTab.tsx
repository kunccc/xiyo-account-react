import React from 'react';

const useTab = () => {
  const [selectedTab, setSelectedTab] = React.useState('pay');
  return {selectedTab, setSelectedTab};
};

export {useTab};