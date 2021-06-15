interface Payload {
  enName: string,
  chName: string,
  type: string,
  date: string,
  mark: string,
  amount: number
}

interface State {
  notes: [{
    date: string,
    items: { enName: string, chName: string, mark: string, detail: string }[]
  }]
}

export const noteReducer = (state: State | { notes: [] } = JSON.parse(localStorage.getItem('notes') || '{"notes": []}'), action: { type: string, payload: Payload }) => {
  if (!action.payload) return state;
  const {enName, chName, type, date, mark, amount} = action.payload;
  switch (action.type) {
    case 'add_note':
      const detail = type === 'pay' ? '-' + amount.toString() : '+' + amount.toString();
      let stateClone = JSON.parse(JSON.stringify(state));
      for (let note of stateClone.notes) {
        if (note.date === date) {
          note.items.push({enName, chName, mark, detail});
          localStorage.setItem('notes', JSON.stringify(stateClone));
          return stateClone;
        }
      }
      stateClone.notes.push({date, items: [{enName, chName, mark, detail}]});
      localStorage.setItem('notes', JSON.stringify(stateClone));
      return stateClone;
    default:
      return state;
  }
};