import currentWordReducer from './game/current-word';
import guessWordReducer from './game/guess-word';
import guessesLeftReducer from './game/guesses-left';
import hasWonReducer from './game/has-won';

export default function(state = {}, action = {}) {
  let currentWord = currentWordReducer(state.currentWord, action);
  let guessWord = guessWordReducer(state.guessWord, {...action, currentWord});
  let guessesLeft = guessesLeftReducer(state.guessesLeft, {...action, pastGuessWord: state.guessWord, currentGuessWord: guessWord});
  let hasWon = hasWonReducer(state.hasWon, {...action, currentGuessWord: guessWord});

  return {
    ...state,
    currentWord,
    guessWord,
    guessesLeft,
    hasWon,
  };
};
