export default function(state = 0, action = {}) {
  switch (action.type) {
    case 'CHOOSE_WORD':
      return 6;
    case 'INCORRECT_GUESS':
      return state - 1;
    default:
      return state;
  }
}
