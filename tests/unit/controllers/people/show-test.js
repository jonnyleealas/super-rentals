import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | people/show', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:people/show');
    assert.ok(controller);
  });
});
