import Redux from 'npm:redux';
import wordsList from './words-list';
import currentWord from './current-word';

export default Redux.combineReducers({wordsList, currentWord});
