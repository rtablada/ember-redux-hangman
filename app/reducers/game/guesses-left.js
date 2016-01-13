export default function(state = 0, action = {}) {
  let {currentGuessWord, pastGuessWord} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return 6;
    case 'GUESS':
      if (currentGuessWord === pastGuessWord) {
        return state - 1;
      }

      return state;
    default:
      return state;
  }
}
