import reducer from '../../../../reducers/game/has-won';
import { module, test } from 'qunit';

module('Unit | Reducer | reducers/game/has-won');

test('it responds to CHOOSE_WORD', function(assert) {
  const state = null;
  const action = {type: 'CHOOSE_WORD', word: 'Foo'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, false);
});

test('it responds to COMPUTE_WIN where game not ended', function(assert) {
  const state = false;
  const action = {type: 'COMPUTE_WIN', guessWord: 'f__'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, false);
});

test('it responds to COMPUTE_WIN where has ended', function(assert) {
  const state = false;
  const action = {type: 'COMPUTE_WIN', guessWord: 'foo'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, true);
});
