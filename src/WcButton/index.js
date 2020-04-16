import style from './style.scss';
class WcButton extends HTMLElement {
	constructor() {
		super();
		// Add a shadow DOM
		const shadowDom = this.attachShadow({ mode: 'open' });
		shadowDom.appendChild(templates.content.cloneNode(true));
	}
	connectedCallback() {
		let children = [].slice.call(this.children);
		const button = document.createElement('button');
		button.classList.add('button-native');
		this.appendChild(button);
		children.map(child => {
			button.appendChild(child);
			return children;
		});
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (this.hasAttribute('color')) {
			let attrib = this.getAttribute('color');
			this.classList.add(`color-${attrib}`);
		}
		if (this.hasAttribute(name) && name !== 'color') {
			this.classList.add(`button-${name}`);
		}
	}

	static get observedAttributes() {
		return ['color', 'solid', 'rounded', 'outline', 'clear', 'large', 'small', 'strong'];
	}
}

const templates = document.createElement('template');
templates.innerHTML = `
      	<style>${style.toString()}</style>
<slot></slot>
  `;

export default WcButton;
