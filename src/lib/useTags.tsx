import {createId} from './createId';
import React, {useState} from 'react';

const tagsSource = [
  {id: createId(), enName: 'eat', chName: '饮食', type: 'pay'},
  {id: createId(), enName: 'live', chName: '住房', type: 'pay'},
  {id: createId(), enName: 'water', chName: '水电', type: 'pay'},
  {id: createId(), enName: 'play', chName: '娱乐', type: 'pay'},
  {id: createId(), enName: 'medicals', chName: '医疗', type: 'pay'},
  {id: createId(), enName: 'traffic', chName: '交通', type: 'pay'},
  {id: createId(), enName: 'income', chName: '工资', type: 'income'},
  {id: createId(), enName: 'reward', chName: '奖金', type: 'income'},
  {id: createId(), enName: 'sideline', chName: '副业', type: 'income'},
  {id: createId(), enName: 'investment', chName: '投资', type: 'income'},
];

const useTags = () => {
  const [selectedTab, setSelectedTab] = useState('pay');
  const [payTags, setPayTags] = useState(tagsSource.filter(tag => tag.type === 'pay'));
  const [incomeTags, setIncomeTags] = useState(tagsSource.filter(tag => tag.type === 'income'));
  const tags = selectedTab === 'pay' ? payTags : incomeTags;
  const deleteTag = (tagId: number, tagType: string) => {
    tagType === 'pay'
      ? setPayTags(payTags.filter(tag => tag.id !== tagId))
      : setIncomeTags(incomeTags.filter(tag => tag.id !== tagId));
  };
  return {tags, selectedTab, setSelectedTab, deleteTag};
};

export {useTags};