export default function(state = false, action = {}) {
  const {currentGuessWord} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return false;
    case 'COMPUTE_WIN':
      return currentGuessWord.indexOf('_') === -1;
    default:
      return state;
  }
}
