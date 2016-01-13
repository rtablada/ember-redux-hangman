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

test('it responds to CORRECT_GUESS', function(assert) {
  const state = {
    currentWord: 'foo',
    guessWord: '___',
    guessesLeft: 6,
    hasWon: false,
    hasLost: false,
    incorrectGuesses: [],
  };

  const action = {
    type: 'CORRECT_GUESS',
    letter: 'f',
    currentWord: 'foo',
    guessesLeft: 6,
  };

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'foo', guessWord: 'f__', guessesLeft: 6, hasWon: false, hasLost: false, incorrectGuesses: []});
});

test('it responds to an incorrect GUESS', function(assert) {
  const state = {
    currentWord: 'foo',
    guessWord: '___',
    guessesLeft: 6,
    hasWon: false,
    hasLost: false,
    incorrectGuesses: [],
  };

  const action = {
    type: 'INCORRECT_GUESS',
    letter: 'a',
    guessesLeft: 6,
    currentWord: 'foo',
  };

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'foo', guessWord: '___', guessesLeft: 5, hasWon: false, hasLost: false, incorrectGuesses: ['a']});
});

test('it responds to CORRECT_GUESS that wins the game', function(assert) {
  const state = {
    currentWord: 'foo',
    guessWord: '_oo',
    guessesLeft: 6,
    hasWon: false,
    hasLost: false,
    incorrectGuesses: [],
  };

  const action = {
    type: 'CORRECT_GUESS',
    letter: 'f',
    currentWord: 'foo',
    guessesLeft: 6,
  };

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'foo', guessWord: 'foo', guessesLeft: 6, hasWon: true, hasLost: false, incorrectGuesses: []});
});
