import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | people/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:people/show');
    assert.ok(route);
  });
});
