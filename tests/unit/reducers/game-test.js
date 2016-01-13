import reducer from '../../../reducers/game';
import { module, test } from 'qunit';

module('Unit | Reducer | reducers/game');

test('it responds to CHOOSE_WORD', function(assert) {
  const state = {};
  const action = {type: 'CHOOSE_WORD', word: 'Foo'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'Foo', guessWord: '___', guessesLeft: 6});
});

test('it responds to correct GUESS', function(assert) {
  const state = {currentWord: 'foo', guessWord: '___', guessesLeft: 6};
  const action = {type: 'GUESS', letter: 'f'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'foo', guessWord: 'f__', guessesLeft: 6});
});

test('it responds to correct GUESS', function(assert) {
  const state = {currentWord: 'foo', guessWord: '___', guessesLeft: 6};
  const action = {type: 'GUESS', letter: 'a'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, {currentWord: 'foo', guessWord: '___', guessesLeft: 5});
});
