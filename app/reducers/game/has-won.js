export default function(state = false, action = {}) {
  const {guessWord} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return false;
    case 'COMPUTE_WIN':
      return guessWord.indexOf('_') === -1;
    default:
      return state;
  }
}
