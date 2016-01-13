import reducer from '../../../../reducers/game/has-lost';
import { module, test } from 'qunit';

module('Unit | Reducer | reducers/game/has-lost');

test('it responds to CHOOSE_WORD', function(assert) {
  const state = null;
  const action = {type: 'CHOOSE_WORD', word: 'Foo', guessesLeft: 6};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, false);
});

test('it responds to INCORRECT_GUESS where game not ended', function(assert) {
  const state = false;
  const action = {type: 'INCORRECT_GUESS', letter: 'f', guessesLeft: 6};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, false);
});

test('it responds to INCORRECT_GUESS where has ended in a loss', function(assert) {
  const state = false;
  const action = {type: 'INCORRECT_GUESS', letter: 'f', guessesLeft: 1};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, true);
});
