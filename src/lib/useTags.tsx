import React from 'react';
import {createId} from './createId';

const tagsSource = [
  {id: createId(), enName: 'eat', chName: '饮食'},
  {id: createId(), enName: 'live', chName: '住房'},
  {id: createId(), enName: 'water', chName: '水电'},
  {id: createId(), enName: 'play', chName: '娱乐'},
];

const useTags = () => {
  const [tags] = React.useState(tagsSource);
  return {tags};
};

export {useTags};