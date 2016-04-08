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
  actions: {
    cancel () {
      this.sendAction('dismiss')
    },
    confirm () {
      this.sendAction('confirm')
      this.sendAction('dismiss')
    }
  }
})
