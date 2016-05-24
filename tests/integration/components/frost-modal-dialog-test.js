// import Ember from 'ember'
// import { expect, assert } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
// import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-modal-dialog',
  'Integration: FrostModalDialogComponent',
  {
    integration: true
  },
  function () {
    it('renders frost-modal-dialog of type ("information")', function () {
    //   this.render(hbs`{{frost-modal-dialog type='information'
    // title="information" message="information message"}}`)
    //   expect(this.$('.frost-modal-dialog .body span').text()).to.equal('information message')
    })
    //
    // it('renders frost-modal-dialog of type ("warning")', function () {
    //   this.render(hbs`{{frost-modal-dialog type='warning' title="warning" message="warning message"}}`)
    //   expect(this.$('.frost-modal-dialog .body span').text()).to.equal('warning message')
    // })
    //
    // it('renders frost-modal-dialog of type ("error")', function () {
    //   this.render(hbs`{{frost-modal-dialog type='error' title="error" message="error message"}}`)
    //   expect(this.$('.frost-modal-dialog .body span').text()).to.equal('error message')
    // })
    //
    // it('renders frost-modal-dialog of type ("confirmation")', function () {
    //   this.render(hbs`{{frost-modal-dialog type='confirmation'
    // title="Confirmation" confirmAlias="Confirm" message="Confirmation message"}}`)
    //   expect(this.$('.frost-modal-dialog .body span').text()).to.equal('Confirmation message')
    // })
    //
    // it('can click on confirm button and observe confirm action', function () {
    //   this.set('clicked', false)
    //   this.on('confirm', function () {
    //     this.set('clicked', true)
    //   })
    //
    //   this.render(hbs`{{frost-modal-dialog type='confirmation'
    //     title="Confirmation" confirmAlias="Confirm" message="Confirmation message" confirm=(action 'confirm')}}`)
    //   Ember.run(() => this.$('.frost-button').get(1).click())
    //   assert.isTrue(this.get('clicked'), 'confirmed')
    // })
  }
)
