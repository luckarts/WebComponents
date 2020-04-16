import style from './style.scss';
class WcButton extends HTMLElement {
	constructor() {
		super();
		// Add a shadow DOM
		const shadowDom = this.attachShadow({ mode: 'open' });
		shadowDom.appendChild(templates.content.cloneNode(true));
	}
	connectedCallback() {
		let slot = this.shadowRoot.querySelectorAll('slot');
		let slots = slot[0].assignedNodes();
		if (slots.length === 0) {
			const alerteMessage = document.createElement('p');
			alerteMessage.textContent = 'No content available';
			this.shadowRoot.appendChild(alerteMessage);
		} else {
			let children = [].slice.call(this.children);
			const button = document.createElement('button');
			button.classList.add('button-native');
			this.appendChild(button);
			children.map(child => {
				button.appendChild(child);
				return children;
			});
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (this.hasAttribute('color')) {
			let attrib = this.getAttribute('color');
			this.classList.add(`color-${attrib}`);
		}
		if (name !== 'color') {
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
