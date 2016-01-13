export default function(state = '', action = {}) {
  const {currentWord} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return action.word.split('')
        .map(() => {return '_';}).join('');
    case 'GUESS':
      return state.split('').map((constter, index) => {
        if (currentWord[index] === action.constter) {
          return currentWord[index];
        }

        return constter;
      }).join('');
    default:
      return state;
  }
}
