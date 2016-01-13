import currentWordReducer from './game/current-word';
import guessWordReducer from './game/guess-word';
import guessesLeftReducer from './game/guesses-left';
import hasWonReducer from './game/has-won';
import hasLostReducer from './game/has-lost';

export default function(state = {}, action = {}) {
  const currentWord = currentWordReducer(state.currentWord, action);
  const guessWord = guessWordReducer(state.guessWord, {...action, currentWord});
  const guessesLeft = guessesLeftReducer(state.guessesLeft, {...action, pastGuessWord: state.guessWord, currentGuessWord: guessWord});
  const hasWon = hasWonReducer(state.hasWon, {...action, currentGuessWord: guessWord});
  const hasLost = hasLostReducer(state.hasLost, {...action, guessesLeft});

  return {
    ...state,
    currentWord,
    guessWord,
    guessesLeft,
    hasWon,
    hasLost,
  };
};
