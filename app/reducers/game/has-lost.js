export default function(state = false, action = {}) {
  let {guessesLeft} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return false;
    case 'GUESS':
      return !guessesLeft;
    default:
      return state;
  }
}
