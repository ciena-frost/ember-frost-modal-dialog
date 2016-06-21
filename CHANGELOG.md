# 2.5.2
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.5.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.5.0
## Non Breaking
- frost-modal-dialog is now a wrapper around  [ember-frost-modal](https://github.com/ciena-frost/ember-frost-modal)
- Added support for a modalName, onOpen and onClose actions

# 2.4.0
## Non Breaking
- frost-modal-dialog is now a wrapper around  [ember-frost-modal](https://github.com/ciena-frost/ember-frost-modal)
- Added support for a modalName, onOpen and onClose actions

# 2.3.0
## Non Breaking
- frost-modal-dialog is now a wrapper around  [ember-frost-modal](https://github.com/ciena-frost/ember-frost-modal)
- Added support for a modalName, onOpen and onClose actions

# 2.2.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.2.0

* **Added** `onClose` property so consumer can know when modal is closed.
* **Added** `onOpen` property so consumer can know when modal is opened.

# 2.1.1

* **Changed** dialog footer buttons from a fixed width of `150px` to have a minimum width of `150px`.

# 2.1.0
## Non breaking changes
- added perfect scroll in the root addon for dialog content.
- updated header+footer styles for scrolling
- using ember-prop-types 

# 2.0.0
## Changed
- BREAKING Using [ember-remodal](http://sethbrasile.github.io/ember-remodal/) addon to simplify modal dialog support. Additional modal-dialog template options required

## Removed
- BREAKING Removed liquid-fire modal code. 
  - Removed the need to configure the router.js file

## Upgrade notes
If you are upgrading your app to use this version, note the following - 
- Remove the modal declaration from your router.js file
- Remove `{{liquid-modal}}` template code if you do not have any other liquid-fire modals in your app
- Apply `remodal-bg` class to the parent container where you want a blur effect on the modal overlay.
- `frost-modal-dialog` root template must use block-slots with `target` and `body` slots. See README for more details.

