import Ember from 'ember'
import computed from 'ember-computed-decorators'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

const {Component, assert} = Ember

export default Component.extend(PropTypeMixin, {
  tagName: 'frost-modal-dialog',
  classNames: ['frost-modal-dialog'],

  propTypes: {
    confirmAlias: PropTypes.string,
    onConfirmHandler: PropTypes.func,
    title: PropTypes.string,
    type: PropTypes.string.isRequired
  },

  getDefaultProps () {
    return {
      title: '',
      type: 'information'
    }
  },

  // ==========================================================================
  // Computed Properties
  // ==========================================================================

  @computed('type')
  dialogIcon (type) {
    switch (type) {
      case 'confirmation':
        return 'warning'
      case 'information':
        return 'info'
      case 'warning':
        return 'warning'
      case 'error':
        return 'dialog-error'
      default:
        assert('Unrecognised type of modal')
    }
  },
  @computed('confirmAlias')
  cancelAlias (confirmAlias) {
    return confirmAlias ? 'Cancel' : 'Close'
  },

  // ==========================================================================
  // Functions
  // ==========================================================================

  // ==========================================================================
  // Events
  // ==========================================================================

  // ==========================================================================
  // Actions
  // ==========================================================================

  actions: {
    confirm () {
      const onConfirm = this.get('onConfirmHandler')
      if (onConfirm) {
        onConfirm()
      }
    },
    modalOpen () {
      const onOpen = this.get('onOpenHandler')
      if (onOpen) {
        onOpen()
      }
    },
    modalClose () {
      const onClose = this.get('onCloseHandler')
      if (onClose) {
        onClose()
      }
    }
  }
})
