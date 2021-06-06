type Payload = {
  tagId: number,
  date: string,
  mark: string,
  amount: number
}
export const noteReducer = (state = {notes: []}, action: { type: string, payload: Payload }) => {
  if (!action.payload) return state;
  const {tagId, date, mark, amount} = action.payload;
  console.log(state.notes);
  switch (action.type) {
    case 'add_note':
      return {
        notes: [...state.notes, {tagId, date, mark, amount}]
      };
    default:
      return state;
  }
};