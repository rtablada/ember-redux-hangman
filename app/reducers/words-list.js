export default function(state = [], action = {}) {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state,
        action.word,
      ];
    default:
      return state;
  }
}
