[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-modal-dialog.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-modal-dialog

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-modal-dialog.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-modal-dialog

[npm-img]: https://img.shields.io/npm/v/ember-frost-modal-dialog.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-modal-dialog

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-modal-dialog

 * [Installation](#installation)
 * [API](#api)
 * [Examples](#examples)
 * [Development](#development)

## Installation
```
ember install ember-frost-modal-dialog
```

## API

| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `dialogType` | `string` | `confirmation` | will display a confirmation dialog |
| | | `information` | will display an information dialog |
| | | `warning` | will display a warning dialog |
| | | `error` | will display an error dialog |
| `dialogTitle` | `string` | `<title>` | title for your dialog |
| `dialogMessage` | `string` | `<message>` | string message content for your dialog |
| `dialogConfirmAlias` | `string` | `<alias>` | string alias for the primary action button in a modal |
| `messageTemplate` | `hbs` | `<custom template>` | optional template partial for the modal body |
| `actionsTemplate` | `hbs` | `<custom template>` | optional template partial for the modal footer actions |

## Examples

### Controller
```javascript
actions: {
  triggerConfirmationDialog () {
    this.set('dialogType', 'confirmation')
    this.set('dialogTitle', 'Confirmation')
    this.set('dialogMessage', 'Confirmation message')
    this.set('dialogConfirmAlias', 'Confirm')
    this.set('isDialogVisible', true)
  }
}
```

### Router
```
this.modal("frost-modal-dialog", {
    withParams: "isDialogVisible",
    dialogClass: "frost-modal-dialog",
    otherParams: [
      {dialogType: "type"},
      {dialogTitle: "title"},
      {dialogMessage: "message"},
      {dialogConfirmAlias: "confirmAlias"}
    ],
    actions: {
      confirm: "dialogConfirmed"
    }
  })
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-modal-dialog.git
cd ember-frost-modal-dialog
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-modal-dialog/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
