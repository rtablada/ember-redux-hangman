function guessActionType(store, {letter}) {
  const state = store.getState();

  if (state.game.currentWord.indexOf(letter[0]) > -1) {
    return 'CORRECT_GUESS';
  }

  return 'INCORRECT_GUESS';
}

// This middleware takes a guess and checks if it is valid or invalid
export default store => next => action => {
  switch (action.type) {
    case 'GUESS':
      const type = guessActionType(store, action);

      const state = store.getState();
      const currentStats = {
        letter: action.letter,
        currentWord: state.game.currentWord,
        guessesLeft: state.game.guessesLeft,
      };

      next({type, ...currentStats});
      return next({type: 'COMPUTE_WIN', guessWord: store.getState().game.guessWord});
    default:
      return next(action);
  }
};
