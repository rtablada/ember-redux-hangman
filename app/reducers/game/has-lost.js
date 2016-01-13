export default function(state = false, action = {}) {
  const {guessesLeft} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return false;
    case 'INCORRECT_GUESS':
      // Accounts for guessesleft being 1...
      return guessesLeft === 1;
    default:
      return state;
  }
}
