module.exports = [
  {
    id: 'demo',
    alias: 'Demo',
    type: 'category',
    route: 'demo',
    path: {
      path: '/'
    },
    modalName: 'frost-modal-dialog',
    modal: {
      withParams: 'isDialogVisible',
      dialogClass: 'frost-modal-dialog',
      otherParams: [
        {
          dialogType: 'type'
        },
        {
          dialogTitle: 'title'
        },
        {
          dialogMessage: 'message'
        },
        {
          dialogConfirmAlias: 'confirmAlias'
        }
      ],
      actions: {
        confirm: 'dialogConfirmed'
      }
    }
  }
]
