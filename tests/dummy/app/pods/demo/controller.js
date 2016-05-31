import Ember from 'ember'

const {Controller} = Ember

export default Controller.extend({
  actions: {
    confirm: function () {
      this.notifications.addNotification({
        message: 'Confirmed',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },
    retry: function () {
      this.notifications.addNotification({
        message: 'Retried',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
