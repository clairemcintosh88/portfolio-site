import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | section-title', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SectionTitle />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <SectionTitle>
        template block text
      </SectionTitle>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
