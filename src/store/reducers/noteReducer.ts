type Payload = {
  enName: string,
  chName: string,
  type: string,
  date: string,
  mark: string,
  amount: number
}
export const noteReducer = (state = {notes: []}, action: { type: string, payload: Payload }) => {
  if (!action.payload) return state;
  const {enName, chName, type, date, mark, amount} = action.payload;
  switch (action.type) {
    case 'add_note':
      return {
        notes: [...state.notes, {enName, chName, type, date, mark, amount}]
      };
    default:
      return state;
  }
};