import Ember from 'ember'

const {Controller} = Ember

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
    },
    openTest: function () {
      console.log('I am Open')
    }
  }
})
