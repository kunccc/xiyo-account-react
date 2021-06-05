import {createId} from '../../lib/createId';

const tagsSource = {
  payTags: [
    {id: createId(), enName: 'eat', chName: '饮食', type: 'pay'},
    {id: createId(), enName: 'live', chName: '住房', type: 'pay'},
    {id: createId(), enName: 'water', chName: '水电', type: 'pay'},
    {id: createId(), enName: 'play', chName: '娱乐', type: 'pay'},
    {id: createId(), enName: 'medicals', chName: '医疗', type: 'pay'},
    {id: createId(), enName: 'traffic', chName: '交通', type: 'pay'}
  ],
  incomeTags: [
    {id: createId(), enName: 'income', chName: '工资', type: 'income'},
    {id: createId(), enName: 'reward', chName: '奖金', type: 'income'},
    {id: createId(), enName: 'sideline', chName: '副业', type: 'income'},
    {id: createId(), enName: 'investment', chName: '投资', type: 'income'}
  ],
  optionalTags: [
    {id: createId(), enName: 'account', chName: '', type: ''},
    {id: createId(), enName: 'beauty', chName: '', type: ''},
    {id: createId(), enName: 'books', chName: '', type: ''},
    {id: createId(), enName: 'clothes', chName: '', type: ''},
    {id: createId(), enName: 'digital', chName: '', type: ''},
    {id: createId(), enName: 'equipment', chName: '', type: ''},
    {id: createId(), enName: 'game', chName: '', type: ''},
    {id: createId(), enName: 'living', chName: '', type: ''},
    {id: createId(), enName: 'pets', chName: '', type: ''},
    {id: createId(), enName: 'shopping', chName: '', type: ''},
    {id: createId(), enName: 'snacks', chName: '', type: ''},
    {id: createId(), enName: 'social', chName: '', type: ''},
    {id: createId(), enName: 'sport', chName: '', type: ''},
    {id: createId(), enName: 'toys', chName: '', type: ''},
    {id: createId(), enName: 'transport', chName: '', type: ''}
  ]
}

type Payload = {
  tagId: number,
  tagType: string,
  tagName: string
}
export const tagReducer = (state = tagsSource, action: { type: string, payload: Payload }) => {
  const {payload} = action;
  switch (action.type) {
    case 'delete_tag':
      if (payload.tagType === 'pay') {
        const tag = state.payTags.find(item => item.id === payload.tagId);
        return {
          ...state,
          optionalTags: [...state.optionalTags, {...tag, chName: '', type: ''}],
          payTags: state.payTags.filter(tag => tag.id !== payload.tagId)
        };
      } else {
        const tag = state.incomeTags.find(item => item.id === payload.tagId);
        return {
          ...state,
          optionalTags: [...state.optionalTags, {...tag, chName: '', type: ''}],
          incomeTags: state.incomeTags.filter(tag => tag.id !== payload.tagId)
        };
      }
    case 'add_tag':
      const tag = state.optionalTags.find(item => item.id === payload.tagId);
      return payload.tagType === 'pay'
        ? {
          ...state,
          payTags: [...state.payTags, {...tag, chName: payload.tagName, type: payload.tagType}],
          optionalTags: state.optionalTags.filter(tag => tag.id !== payload.tagId)
        }
        : {
          ...state,
          incomeTags: [...state.payTags, {...tag, chName: payload.tagName, type: payload.tagType}],
          optionalTags: state.optionalTags.filter(tag => tag.id !== payload.tagId)
        };
    default:
      return state;
  }
};