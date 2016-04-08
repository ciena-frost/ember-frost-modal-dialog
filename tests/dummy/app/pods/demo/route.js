import Ember from 'ember'

export default Ember.Route.extend({

  actions: {
    dialogConfirmed: function () {
      this.notifications.addNotification({
        message: 'Confirmed',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
