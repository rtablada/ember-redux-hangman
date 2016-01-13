import currentWordReducer from './game/current-word';
import guessWordReducer from './game/guess-word';

export default function(state = {}, action = {}) {
  let currentWord = currentWordReducer(state.currentWord, action);
  let guessWord = guessWordReducer(state.guessWord, {...action, currentWord});

  return {
    ...state,
    currentWord,
    guessWord,
  };
};
