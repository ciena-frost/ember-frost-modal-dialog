[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-modal-dialog.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-modal-dialog

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-modal-dialog.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-modal-dialog

[npm-img]: https://img.shields.io/npm/v/ember-frost-modal-dialog.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-modal-dialog

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-modal-dialog
A modal dialog for messages requiring some user feedback. This is a wrapper around [ember-frost-modal](https://github.com/ciena-frost/ember-frost-modal) that provides the base styles and block structure

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
| `modalName` | `string` | `<name>` | Optional name for the modal, accessible via ember-remodal service |
| `type` | `string` | `confirmation` | will display a confirmation dialog |
| | | `information` | will display an information dialog |
| | | `warning` | will display a warning dialog |
| | | `error` | will display an error dialog |
| `title` | `string` | `<title>` | Optional title for your dialog |
| `confirmAlias` | `string` | `<alias>` | Optional string alias that would render the primary action button in a modal |
| `onConfirmHandler` | `Function` | `<action-name>` | If confirmAlias is present, callback for when the confirm button is clicked |
| `onOpenHandler` | `Function` | `<action-name>` | Callback triggered after the modal opens |
| `onCloseHandler` | `Function` | `<action-name>` | Callback triggered after the modal closes |

## Examples

### Template
Block-slot `target` yields the component used to launch the modal, e.g. a button
Optional Block-slot `header` yields a custom title template if `title` attr was not provided
Block-slot `body` yields the dialog content
A Cancel button is always rendered to allow the modal to be closed.

```handlebars
{{#frost-modal-dialog
  title='confirmation'
  type='confirmation'
  confirmAlias='Confirm'
  onConfirmHandler=(action 'confirmHandler')}}
  {{#block-slot slot 'target'}}
    {{frost-button
      priority="primary"
      size="medium"
      text='Confirmation dialog'
    }}
  {{/block-slot}}
  {{#block-slot slot 'body'}}
    Test
  {{/block-slot}}
{{/frost-modal-dialog}}
```
### Controller
```javascript
actions: {
  confirmHandler: function () {

  }
}
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
