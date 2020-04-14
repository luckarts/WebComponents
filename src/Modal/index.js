import styles from './style.scss';

class Modal extends HTMLElement {
	constructor() {
		super();
		// Add a shadow DOM
		const shadowDom = this.attachShadow({ mode: 'open' });
		shadowDom.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		const modal = this.shadowRoot.querySelector('#modal');
		this.addEventListener('click', event => {
			const isClickInside = modal.contains(event.path[0]);
			if (!isClickInside) {
				this.hide();
			}
		});
	}

	attributeChangeCallback(name, oldValue, newValue) {
		if (this.hasAttribute('open')) {
			this.isOpen = true;
		} else {
			this.isOpen = false;
		}
	}

	_createCloseButton() {
		const closeButt = document.createElement('button');
		closeButt.setAttribute('class', 'close');
		this.shadowRoot.appendChild(closeButt);
		const cancellButton = this.shadowRoot.querySelector('.close');
		cancellButton.addEventListener('click', this.hide.bind(this));
	}
	open() {
		this.setAttribute('open', '');
	}
	hide() {
		this.removeAttribute('open');
	}
	static get obseredAttributes() {
		return ['open', 'closebutton'];
	}
}
const template = document.createElement('template');
template.innerHTML = `
  <style>${styles.toString()}</style>
    <div id="backdrop"></div>
    <div id="modal">
    <slot></slot>

    </div>

`;

export default Modal;
