function guessActionType(store, letter) {
  const state = store.getState();

  if (state.game.currentWord.indexOf(letter[0]) > -1) {
    return 'CORRECT_GUESS';
  }

  return 'INCORRECT_GUESS';
}

function sendGuessAction(store, next, {letter}) {
  const state = store.getState();
  const type = guessActionType(store, letter);

  next({type, letter, currentWord: state.game.currentWord});
}

function sendGameEndAction(store, next, action) {
  const state = store.getState();

  return next({
    type: 'COMPUTE_WIN',
    guessWord: store.getState().game.guessWord,
    guessesLeft: state.game.guessesLeft,
  });
}

// This middleware takes a guess and checks if it is valid or invalid
export default store => next => action => {
  switch (action.type) {
    case 'GUESS':
      sendGuessAction(store, next, action);
      sendGameEndAction(store, next, action);
    default:
      return next(action);
  }
};
