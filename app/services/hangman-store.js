import Ember from 'ember';
import Redux from 'npm:redux';
import hangmanReducer from '../reducers/hangman';
import dictionary from '../utils/dictionary';

let {set} = Ember;
let {createStore} = Redux;

export default Ember.Service.extend({
  init() {
    this._super(...arguments);

    set(this, 'store', createStore(hangmanReducer));

    this.addWords();
  },

  addWords() {
    dictionary.forEach((word) => {
      this.get('store').dispatch({type: 'ADD_WORD', word});
    });
  },
});
