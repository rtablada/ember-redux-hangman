import _ from 'lodash';

export default function(state = [], action = {}) {
  const {currentGuessWord, pastGuessWord} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return [];
    case 'GUESS':
      if (currentGuessWord === pastGuessWord) {
        return _.uniq([...state, action.letter]);
      }

      return state;
    default:
      return state;
  }
}
