## <wc-modal>
> IMPORTANT: The Web Components are a work in progress and subject to major changes until 1.0 release.

## Installation
comming soon !

## Example usage
### Standard

```html
<wc-modal  closeButton></wc-modal>
<wc-modal><header><h2>title</h2></header><p>content available</p><button>close</button></wc-modal>
```
## API

### Properties/Attributes
| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `closeButton` | `boolean` | `''` | active default button to leave the modal.
| `open` | `boolean` | `''` | to hide or show the modal`.
|

### CSS Custom Properties

| Name | Default | Description
| ------------------------------------- | -------------------------------------------------- | ---
| `--wc-modal-bgColor`           |  #white                  | Background color of the modal
| `--wc-modal-top`               | 15vh                     | Top of the position fixed
| `--wc-modal-left`              | 25%                      | Left of the position fixed
| `--wc-modal-width`             | 600px                    | Modal min-width.
| `--wc-modal-zIndex`            | 100                      | Z-index of the popup menu surface.
| `--wc-modal-minHeight`         | 30vh                     | Modal min-height.
| `--wc-modal-padding`           | 10px 15px                | Left and right padding of the modal
| `--wc-modal-margin`            |  0px auto                | Left and right margin of the modal

### Methods

| Name  | Description
| ------------------------------------| -------------------------------------------------- | ---
| show() => void                      | Sets open to true.
| hide()  => void                     | Sets open to false.


MIT © [Bachelerie Luc]()