import currentWordReducer from './game/current-word';
import guessWordReducer from './game/guess-word';
import guessesLeftReducer from './game/guesses-left';
import hasWonReducer from './game/has-won';
import hasLostReducer from './game/has-lost';
import incorrectGuessesReducer from './game/incorrect-guesses';

export default function(state = {}, action = {}) {
  const currentWord = currentWordReducer(state.currentWord, action);
  const guessWord = guessWordReducer(state.guessWord, action);
  const guessesLeft = guessesLeftReducer(state.guessesLeft, action);
  const incorrectGuesses = incorrectGuessesReducer(state.incorrectGuesses, action);
  const hasLost = hasLostReducer(state.hasLost, action);
  const hasWon = hasWonReducer(state.hasWon, {...action, currentGuessWord: guessWord});

  return {
    ...state,
    currentWord,
    guessWord,
    guessesLeft,
    hasWon,
    hasLost,
    incorrectGuesses,
  };
};
