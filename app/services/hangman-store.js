import Ember from 'ember';
import Redux from 'npm:redux';
import hangmanReducer from '../reducers/hangman';
import dictionary from '../utils/dictionary';
import _ from 'lodash';

const {set} = Ember;
const {createStore} = Redux;

export default Ember.Service.extend({
  state: {},
  init() {
    this._super(...arguments);

    set(this, 'store', createStore(hangmanReducer));

    this.subscribeState();
    this.addWords();
  },

  addWords() {
    dictionary.forEach((word) => {
      this.sendAction('ADD_WORD', {word});
    });
  },

  subscribeState() {
    const store = this.get('store');

    store.subscribe(() => {
      console.log('Store Change', store.getState());
      this.set('state', store.getState());
    });
  },

  randomWord() {
    const index = _.random(this.get('state.wordsList.length') - 1);

    this.sendAction('CHOOSE_WORD', { word: this.get('state.wordsList')[index]});
  },

  sendAction(type, data) {
    console.log('ACTION:', type, data);

    this.store.dispatch({
      ...data,
      type,
    });
  },
});
