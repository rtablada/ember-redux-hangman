import wordsList from './words-list';

export default function(state, action) {
  return {
    wordsList: wordsList(state, action),
  };
}
