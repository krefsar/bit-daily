import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | courses/coinbase-info', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:courses/coinbase-info');
    assert.ok(route);
  });
});
