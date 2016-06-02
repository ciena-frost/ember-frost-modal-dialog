// import Ember from 'ember'
import {assert, expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {initialize} from 'ember-block-slots/initializers/component-block-slots'
import $ from 'jquery'
import {afterEach, beforeEach, describe} from 'mocha'

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

    describe('render', function () {
      let onClose, onOpen, sandbox

      beforeEach(function () {
        sandbox = sinon.sandbox.create()
        onClose = sandbox.spy()
        onOpen = sandbox.spy()

        this.on('confirm', () => {})

        this.setProperties({onClose, onOpen})

        this.render(hbs`{{#frost-modal-dialog
          confirmAlias='Confirm'
          onClose=onClose
          onConfirmHandler=(action 'confirm')
          onOpen=onOpen
          title='confirmation'
          type='confirmation'
        }}
          {{#block-slot slot 'target'}}
            {{frost-button
              priority="primary"
              size="medium"
              text='Confirmation dialog'
            }}
          {{/block-slot}}
          {{#block-slot slot 'body'}}Test{{/block-slot}}
        {{/frost-modal-dialog}}`)
      })

      afterEach(function () {
        sandbox.restore()
      })

      it('renders target', function () {
        expect(this.$('.frost-button:visible')).to.have.length(1)
      })

      describe('open modal', function () {
        beforeEach(function (done) {
          this.$('.frost-button').first().click()
          Ember.run.later(() => {
            done()
          }, 750)
        })

        it('opens the modal', function () {
          let length = $('[data-test-id="modalWindow"].remodal-is-opened').length ||
                      $('[data-test-id="modalWindow"].remodal-is-opening').length
          expect(length).to.equal(1)
        })

        it('renders header', function () {
          expect($('[data-test-id="yielded"] .header').length).is.equal(1)
        })

        it('renders title', function () {
          expect($('[data-test-id="yielded"] .header .title').text()).to.equal('confirmation')
        })

        it('has action buttons', function () {
          var cancelBtn = $('[data-test-id="modalWindow"] .footer .frost-button')[0]
          var confirmBtn = $('[data-test-id="modalWindow"] .footer .frost-button')[1]
          assert.isNotNull(cancelBtn)
          assert.isNotNull(confirmBtn)
        })

        it('fires onOpen property', function () {
          expect(onOpen.callCount).to.equal(1)
        })

        it('does not fire onClose property', function () {
          expect(onClose.callCount).to.equal(0)
        })
      })
    })
  }
)
