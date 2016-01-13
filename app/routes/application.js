import Ember from 'ember';

export default Ember.Route.extend({
  hangman: Ember.inject.service('hangman-store'),

  actions: {
    startGame() {
      this.get('hangman').randomWord();
    },

    guess(input = '') {
      this.get('hangman').sendAction('GUESS', {letter: input[0]});
    },
  },
});
