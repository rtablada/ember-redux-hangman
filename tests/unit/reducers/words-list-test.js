import reducer from '../../../reducers/words-list';
import { module, test } from 'qunit';

module('Unit | Reducer | reducers/words-list');

test('it adds a word', function(assert) {
  const state = [];
  const action = {type: 'ADD_WORD', word: 'Foo'};

  Object.freeze(state);
  Object.freeze(action);

  const result = reducer(state, action);

  assert.deepEqual(result, ['Foo']);
});
