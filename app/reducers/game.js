import currentWordReducer from './game/current-word';
import guessWordReducer from './game/guess-word';
import guessesLeftReducer from './game/guesses-left';

export default function(state = {}, action = {}) {
  let currentWord = currentWordReducer(state.currentWord, action);
  let guessWord = guessWordReducer(state.guessWord, {...action, currentWord});
  let guessesLeft = guessesLeftReducer(state.guessesLeft, {...action, pastGuessWord: state.guessWord, currentGuessWord: guessWord});

  return {
    ...state,
    currentWord,
    guessWord,
    guessesLeft,
  };
};
