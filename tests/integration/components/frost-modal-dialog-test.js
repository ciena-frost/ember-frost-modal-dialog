// import Ember from 'ember'
import { expect, assert } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import { initialize } from 'ember-block-slots/initializers/component-block-slots'

describeComponent(
  'frost-modal-dialog',
  'Integration: FrostModalDialogComponent',
  {
    integration: true
  },
  function () {
    it('opens frost-modal-dialog of type ("confirmation")', function () {
      this.on('confirm', function() {
      })
      this.render(hbs`{{#frost-modal-dialog
        title='confirmation'
        type='confirmation'
        confirmAlias='Confirm'
        onConfirmHandler=(action 'confirm')}}
        {{#block-slot slot 'target'}}
          {{frost-button
            priority="primary"
            size="medium"
            text='Confirmation dialog'
          }}
        {{/block-slot}}
        {{#block-slot slot 'body'}}Test{{/block-slot}}
      {{/frost-modal-dialog}}`)

      this.$('.frost-button')[0].click()
        let length = $('[data-test-id="modalWindow"].remodal-is-opened').length ||
                    $('[data-test-id="modalWindow"].remodal-is-opening').length
        expect(length).to.equal(1)
        expect($('[data-test-id="yielded"] .header').text()).to.have.string('confirmation')
    })
  }
)
