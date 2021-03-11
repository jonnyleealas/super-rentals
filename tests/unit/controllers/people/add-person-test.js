import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | people/add-person', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:people/add-person');
    assert.ok(controller);
  });
});
