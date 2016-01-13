import reducer from '../../../../reducers/game/guesses-left';
import { module, test } from 'qunit';

module('Unit | Reducer | reducers/game/guesses-left');

test('it responds to CHOOSE_WORD', function(assert) {
  const state = null;
  const action = {type: 'CHOOSE_WORD', word: 'Foo'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, 6);
});

test('it responds to correct GUESS', function(assert) {
  const state = 6;
  const action = {type: 'CORRECT_GUESS', letter: 'f'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, 6);
});

test('it responds to incorrect GUESS', function(assert) {
  const state = 6;
  const action = {type: 'INCORRECT_GUESS', letter: 'f'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, 5);
});
