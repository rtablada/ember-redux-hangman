import Redux from 'npm:redux';
import hangmanReducer from '../reducers/hangman';
import guess from '../middleware/guess';

const {createStore, applyMiddleware} = Redux;

const createStoreWithMiddleware = applyMiddleware(guess)(createStore);

export default createStoreWithMiddleware(hangmanReducer);
