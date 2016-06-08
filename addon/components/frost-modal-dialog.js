import Ember from 'ember'
import computed from 'ember-computed-decorators'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

const {Component, assert} = Ember

export default Component.extend(PropTypeMixin, {
  tagName: 'frost-modal-dialog',
  classNames: ['frost-modal-dialog'],

  propTypes: {
    confirmAlias: PropTypes.string,
    onClose: PropTypes.func,
    onConfirmHandler: PropTypes.func,
    onOpen: PropTypes.func,
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
      const onOpen = this.get('onOpen')

      if (onOpen) {
        onOpen()
      }
    },
    modalClose () {
      const onClose = this.get('onClose')

      if (onClose) {
        onClose()
      }
    }
  }
})
