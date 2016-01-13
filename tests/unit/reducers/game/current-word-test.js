import reducer from '../../../../reducers/game/current-word';
import { module, test } from 'qunit';

module('Unit | Reducer | reducers/game/current-word');

test('it responds to CHOOSE_WORD', function(assert) {
  const state = null;
  const action = {type: 'CHOOSE_WORD', word: 'Foo'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, 'Foo');
});
