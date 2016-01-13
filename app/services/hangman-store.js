import Ember from 'ember';
import store from '../stores/hangman';
import dictionary from '../utils/dictionary';
import _ from 'lodash';

const {set} = Ember;

export default Ember.Service.extend({
  state: {},
  init() {
    this._super(...arguments);

    set(this, 'store', store);

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
      this.set('state', store.getState());
    });
  },

  randomWord() {
    const index = _.random(this.get('state.wordsList.length') - 1);

    this.sendAction('CHOOSE_WORD', { word: this.get('state.wordsList')[index]});
  },

  sendAction(type, data) {
    this.store.dispatch({
      ...data,
      type,
    });
  },
});
