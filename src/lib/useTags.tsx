import React from 'react';
import {createId} from './createId';
import {useTab} from './useTab';

const tagsSourceForPay = [
  {id: createId(), enName: 'eat', chName: '饮食'},
  {id: createId(), enName: 'live', chName: '住房'},
  {id: createId(), enName: 'water', chName: '水电'},
  {id: createId(), enName: 'play', chName: '娱乐'},
  {id: createId(), enName: 'hospi', chName: '医疗'},
  {id: createId(), enName: 'traffic', chName: '交通'},
];

const tagsSourceForIncome = [
  {id: createId(), enName: 'income', chName: '收入'},
  {id: createId(), enName: 'reward', chName: '奖金'},
  {id: createId(), enName: 'sideline', chName: '副业'},
  {id: createId(), enName: 'investment', chName: '投资'},
];

const useTags = () => {
  const {selectedTab} = useTab();
  const [tags] = React.useState(selectedTab === 'pay' ? tagsSourceForPay : tagsSourceForIncome);
  return {tags};
};

export {useTags};