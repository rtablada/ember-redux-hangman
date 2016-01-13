import _ from 'lodash';

export default function(state = [], action = {}) {
  const {currentGuessWord, pastGuessWord} = action;

  switch (action.type) {
    case 'CHOOSE_WORD':
      return [];
    case 'INCORRECT_GUESS':
      return _.uniq([...state, action.letter]);
    default:
      return state;
  }
}
