export default function(state = null, action = {}) {
  switch (action.type) {
    case 'CHOOSE_WORD':
      return action.word;
    default:
      return state;
  }
}
