## <wc-icon>
> IMPORTANT: The Web Components are a work in progress

## Installation
comming soon !

## Example usage
### Standard

```html
  <wc-button color="primary" solid>
        <span> Open Modal</span>
    </wc-button>
```
```html
  <wc-button outline rounded class="hover-icon">
        <wc-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg></wc-icon>
        <span> Open Modal</span>
    </wc-button>
```
```html
 <wc-button color="primary" solid>
        <span> Open Modal</span>
         <wc-icon color='contrast'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg></wc-icon>
    </wc-button>
```
```html
<style>
    :root {
    --color-primary: #488aff;
    --color-contrast: white ;
}
</style>
```
## API

### CSS Custom Properties

| Name | Default | Description
| ------------------------------------- | -------------------------------------------------- | ---
| `--color-primary`                     |  #488aff;                  |  base color of the icon
| `--color-contrast`                    | white                      | default width icon
| `--color-button-outline-hover`        |                            | default height icon
| `--color-bg-outline-hover`            |                            | default display icon
| `--color-primary-tint-hover`          |                            | default display icon


MIT © [Bachelerie Luc]()