import {createId} from '../../lib/createId';

const tagsSource = {
  payTags: [
    {id: createId(), enName: 'eat', chName: '饮食', type: 'pay'},
    {id: createId(), enName: 'live', chName: '住房', type: 'pay'},
    {id: createId(), enName: 'water', chName: '水电', type: 'pay'},
    {id: createId(), enName: 'play', chName: '娱乐', type: 'pay'},
    {id: createId(), enName: 'medicals', chName: '医疗', type: 'pay'},
    {id: createId(), enName: 'traffic', chName: '交通', type: 'pay'},
  ],
  incomeTags: [
    {id: createId(), enName: 'income', chName: '工资', type: 'income'},
    {id: createId(), enName: 'reward', chName: '奖金', type: 'income'},
    {id: createId(), enName: 'sideline', chName: '副业', type: 'income'},
    {id: createId(), enName: 'investment', chName: '投资', type: 'income'},
  ]
}

export const tagReducer = (state=tagsSource, action: {}) => {
  console.log(action)
  return state
}