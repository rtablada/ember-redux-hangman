import Redux from 'npm:redux';
import currentWord from './game/current-word';
import guessWord from './game/guess-word';
import guessesLeft from './game/guesses-left';
import hasWon from './game/has-won';
import hasLost from './game/has-lost';
import incorrectGuesses from './game/incorrect-guesses';

const { combineReducers } = Redux;

export default combineReducers({
  currentWord,
  guessWord,
  guessesLeft,
  hasWon,
  hasLost,
  incorrectGuesses,
});
