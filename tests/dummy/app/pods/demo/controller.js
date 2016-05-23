import Ember from 'ember'

const {Controller} = Ember

export default Controller.extend({
  isDialogVisible: false,
  dialogType: null,
  dialogTitle: null,
  dialogMessage: null,
  dialogConfirmAlias: null,

  actions: {
    triggerInformationDialog () {
      this.set('dialogType', 'information')
      this.set('dialogTitle', 'Information')
      this.set('dialogMessage', 'Information message')
      this.set('dialogConfirmAlias', 'Action')
      this.set('isDialogVisible', true)
    },
    triggerWarningDialog () {
      this.set('dialogType', 'warning')
      this.set('dialogTitle', 'Warning')
      this.set('dialogMessage', 'Warning message')
      this.set('dialogConfirmAlias', null)
      this.set('isDialogVisible', true)
    },
    triggerErrorDialog () {
      this.set('dialogType', 'error')
      this.set('dialogTitle', 'Error')
      this.set('dialogMessage', 'Error message')
      this.set('dialogConfirmAlias', 'Retry')
      this.set('isDialogVisible', true)
    }
  }
})
