import {createId} from './createId';
import {useState} from 'react';

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
const tagsSourceForPay = tagsSource.filter(tag => tag.type === 'pay');
const tagsSourceForIncome = tagsSource.filter(tag => tag.type === 'income');

const useTags = () => {
  const [payTags, setPayTags] = useState(tagsSourceForPay);
  const [incomeTags, setIncomeTags] = useState(tagsSourceForIncome);
  const deleteTag = (tagId: number, tagType: string) => {
    tagType === 'pay'
      ? setPayTags(tagsSourceForPay.filter(tag => tag.id !== tagId))
      : setIncomeTags(tagsSourceForIncome.filter(tag => tag.id !== tagId));
  };
  return {payTags, incomeTags, deleteTag};
};

export {useTags};