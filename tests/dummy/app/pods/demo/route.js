import Ember from 'ember'

export default Ember.Route.extend({

  actions: {
    confirm: function () {
      this.notifications.addNotification({
        message: 'Confirmed',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
