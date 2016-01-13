export default function(state = false, action = {}) {
  const {guessesLeft} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return false;
    case 'INCORRECT_GUESS':
      return !guessesLeft;
    default:
      return state;
  }
}
