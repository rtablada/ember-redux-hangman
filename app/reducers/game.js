import currentWordReducer from './current-word';
import guessWordReducer from './guess-word';

export default function(state = {}, action = {}) {
  let currentWord = currentWordReducer(state.currentWord, action);
  let guessWord = guessWordReducer(state.guessWord, {...action, currentWord});

  return {
    ...state,
    currentWord,
    guessWord,
  };
};
