import Ember from 'ember';
import Redux from 'npm:redux';
import hangmanReducer from '../reducers/hangman';
import dictionary from '../utils/dictionary';
import _ from 'lodash';

let {set} = Ember;
let {createStore} = Redux;

export default Ember.Service.extend({
  init() {
    this._super(...arguments);

    set(this, 'store', createStore(hangmanReducer));

    this.pushState();
    this.addWords();
  },

  addWords() {
    dictionary.forEach((word) => {
      this.get('store').dispatch({type: 'ADD_WORD', word});
    });
  },

  pushState() {
    let store = this.get('store');

    store.subscribe(() => {
      this.set('state', store.getState());
    });
  },

  randomWord() {
    const index = _.random(this.get('state.wordList.length') - 1);

    this.store.dispatch({
      type: 'CHOOSE_WORD',
      word: this.get('state.wordList')[index],
    });
  },

  sendAction(type, data) {
    this.store.dispatch({
      ...data,
      type,
    });
  },
});
