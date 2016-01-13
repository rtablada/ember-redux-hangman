export default function(state = false, action = {}) {
  const {currentGuessWord} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return false;
    case 'GUESS':
      return currentGuessWord.indexOf('_') === -1;
    default:
      return state;
  }
}
