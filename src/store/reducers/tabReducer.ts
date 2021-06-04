export const tabReducer = (state = {
  tabs: {pay: '支出', income: '收入'},
  selectedTab: 'pay'
}, action: { type: string }) => {
  switch (action.type) {
    case 'switch_pay':
      return {...state, selectedTab: 'pay'};
    case 'switch_income':
      return {...state, selectedTab: 'income'};
    default:
      return state;
  }
};