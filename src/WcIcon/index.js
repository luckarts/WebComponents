import style from './style.scss';
class WcIcon extends HTMLElement {
	constructor() {
		super();
		// Add a shadow DOM
		const shadowDom = this.attachShadow({ mode: 'open' });
		shadowDom.appendChild(templates.content.cloneNode(true));
	}
	attributeChangedCallback(name, oldValue, newValue) {
		if (this.hasAttribute('color')) {
			let attrib = this.getAttribute('color');
			this.classList.add(`color-${attrib}`);
		}
	}

	static get observedAttributes() {
		return ['color'];
	}
}

const templates = document.createElement('template');
templates.innerHTML = `
      	<style>${style.toString()}</style>
<slot></slot>
  `;

export default WcIcon;
