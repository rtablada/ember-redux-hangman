function guessAction(store, {letter}) {
  const state = store.getState();

  if (state.game.currentWord.indexOf(letter[0]) > -1) {
    return {
      type: 'CORRECT_GUESS',
      letter,
      currentWord: state.game.currentWord,
      guessesLeft: state.game.guessesLeft,
    };
  }

  return {
    type: 'INCORRECT_GUESS',
    letter,
  };
}

// This middleware takes a guess and checks if it is valid or invalid
export default store => next => action => {
  switch (action.type) {
    case 'GUESS':
      return next(guessAction(store, action));
    default:
      return next(action);
  }
};
