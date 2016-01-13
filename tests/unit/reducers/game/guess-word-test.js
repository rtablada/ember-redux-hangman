import reducer from '../../../../reducers/game/guess-word';
import { module, test } from 'qunit';

module('Unit | Reducer | reducers/game/guess-word');

test('it responds to CHOOSE_WORD', function(assert) {
  const state = null;
  const action = {type: 'CHOOSE_WORD', word: 'Foo'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, '___');
});

test('it responds to GUESS', function(assert) {
  const state = '___';
  const action = {type: 'GUESS', letter: 'f', currentWord: 'foo'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, 'f__');
});
