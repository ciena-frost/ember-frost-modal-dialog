import Ember from 'ember'

const {Controller, Logger} = Ember

export default Controller.extend({
  messageContent: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    ' Vestibulum ante ipsum primis in faucibus.',
    'Phasellus eu risus a sapien posuere cursus'
  ],

  actions: {
    close () {
      Logger.log('modal closed')
    },

    confirm: function () {
      this.notifications.addNotification({
        message: 'Confirmed',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    open () {
      Logger.log('modal opened')
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
