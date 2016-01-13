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

test('it responds to GUESS where game not ended', function(assert) {
  const state = false;
  const action = {type: 'GUESS', letter: 'f', guessesLeft: 6};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, false);
});

test('it responds to GUESS where has ended in a win', function(assert) {
  const state = false;
  const action = {type: 'GUESS', letter: 'f', guessesLeft: 6};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, false);
});

test('it responds to GUESS where has ended in a loss', function(assert) {
  const state = false;
  const action = {type: 'GUESS', letter: 'f', guessesLeft: 0};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, true);
});
