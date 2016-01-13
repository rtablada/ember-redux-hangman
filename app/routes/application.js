import Ember from 'ember';

export default Ember.Route.extend({
  hangman: Ember.inject.service('hangman-store'),

  actions: {
    startGame() {
      this.get('hangman').randomWord();
    },
  },
});
