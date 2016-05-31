// import Ember from 'ember'
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import { initialize } from 'ember-block-slots/initializers/component-block-slots'
import $ from 'jquery'
import {beforeEach} from 'mocha'

describeComponent(
  'frost-modal-dialog',
  'Integration: FrostModalDialogComponent',
  {
    integration: true
  },
  function () {
    let container, application

    beforeEach(function () {
      Ember.testing = true
      Ember.run(() => {
        application = Ember.Application.create()
        container = application.__container__
        application.deferReadiness()
      })
      initialize(container, application)
    })

    it('opens frost-modal-dialog of type ("confirmation")', function () {
      this.on('confirm', function () {
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
