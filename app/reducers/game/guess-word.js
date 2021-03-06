export default function(state = '', action = {}) {
  const {currentWord} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return action.word.split('')
        .map(() => {return '_';}).join('');
    case 'CORRECT_GUESS':
      return state.split('').map((letter, index) => {
        if (currentWord[index] === action.letter) {
          return currentWord[index];
        }

        return letter;
      }).join('');
    default:
      return state;
  }
}
