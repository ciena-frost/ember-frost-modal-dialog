import Ember from 'ember'
import layout from '../templates/components/frost-modal-dialog'
import computed from 'ember-computed-decorators'

const {Component, assert} = Ember

export default Component.extend({
  layout: layout,
  tagName: 'frost-modal-dialog',
  classNames: ['frost-modal-dialog'],

  @computed('type')
  dialogIcon (type) {
    switch (type) {
      case 'confirmation':
        return 'frost/warning'
      case 'information':
        return 'frost/info'
      case 'warning':
        return 'frost/warning'
      case 'error':
        return 'frost/dialog-error'
      default:
        assert('Unrecognised type of modal')
    }
  },
  @computed('confirmAlias')
  cancelAlias (confirmAlias) {
    return confirmAlias ? 'Cancel' : 'Close'
  },
  didRender () {
    Ember.$('.ember-remodal.window').addClass('frost-modal-dialog')
  },

  actions: {
    confirm () {
      this.get('onConfirmHandler')()
    },
    modalOpen () {
      // this.set('$containerEl', Ember.$('.ember-remodal.window.remodal-is-opened .ps-container'))
      // this.set('$headerEl', Ember.$('.ember-remodal.window.remodal-is-opened .input-header'))
      // this.set('$footerEl', Ember.$('.ember-remodal.window.remodal-is-opened .actions'))
      //
      // if (!(this.get('$containerEl').length > 0 && this.get('$headerEl').length > 0 && this.get('$footerEl').length > 0)) {
      //   return
      // }
      // if (!this.get('scrollBindingsSet')) {
      //   this.setScrollBindings()
      // }
    },
    modalClose () {
      // Ember.$(document).off('ps-scroll-up ps-scroll-down ps-y-reach-start ps-y-reach-end')
      //
      // Ember.$(window).off('resize', this.updateScrollStyles)
      //
      // if (this.get('containerObserver')) {
      //   this.get('containerObserver').disconnect()
      // }
      // this.set('scrollBindingsSet', false)
    }

  }
})
