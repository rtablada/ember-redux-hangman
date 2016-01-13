import Redux from 'npm:redux';
import wordsList from './words-list';
import game from './game';

export default Redux.combineReducers({wordsList, game});
