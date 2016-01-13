import reducer from '../../../reducers/game';
import { module, test } from 'qunit';

module('Unit | Reducer | reducers/game');

test('it responds to CHOOSE_WORD', function(assert) {
  const state = {};
  const action = {type: 'CHOOSE_WORD', word: 'Foo'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'Foo', guessWord: '___', guessesLeft: 6, hasWon: false, hasLost: false, incorrectGuesses: []});
});

test('it responds to correct GUESS', function(assert) {
  const state = {currentWord: 'foo', guessWord: '___', guessesLeft: 6};
  const action = {type: 'GUESS', letter: 'f'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'foo', guessWord: 'f__', guessesLeft: 6, hasWon: false, hasLost: false, incorrectGuesses: []});
});

test('it responds to an incorrect GUESS', function(assert) {
  const state = {currentWord: 'foo', guessWord: '___', guessesLeft: 6};
  const action = {type: 'GUESS', letter: 'a'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'foo', guessWord: '___', guessesLeft: 5, hasWon: false, hasLost: false, incorrectGuesses: ['a']});
});

test('it responds to correct GUESS that wins the game', function(assert) {
  const state = {currentWord: 'foo', guessWord: '_oo', guessesLeft: 6};
  const action = {type: 'GUESS', letter: 'f'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'foo', guessWord: 'foo', guessesLeft: 6, hasWon: true, hasLost: false, incorrectGuesses: []});
});
