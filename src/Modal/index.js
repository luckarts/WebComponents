import styles from './style.scss';

class Modal extends HTMLElement {
	constructor() {
		super();
		const shadowDom = this.attachShadow({ mode: 'open' });
		shadowDom.appendChild(template.content.cloneNode(true));
		this.modal = this.shadowRoot.querySelector('#modal');
	}
	connectedCallback() {
		this.addEventListener('click', event => {
			const isClickInside = this.modal.contains(event.path[0]);
			if (!isClickInside) {
				this.hide();
			}
		});
		if (this.hasAttribute('closeButton')) this._createCloseButton();
		this.checkComponentInSlot();
	}
	checkComponentInSlot() {
		let slot = this.shadowRoot.querySelectorAll('slot');
		let slots = slot[0].assignedNodes();
		if (slots.length === 0) {
			const alerteMessage = document.createElement('p');
			alerteMessage.textContent = 'No content available';
			this.modal.appendChild(alerteMessage);
		}
	}
	attributeChangeCallback(name, oldValue, newValue) {
		if (this.hasAttribute('open')) {
			this.isOpen = true;
		} else {
			this.isOpen = false;
		}
	}
	_createElemwithClass(className) {
		const div = document.createElement('div');
		div.setAttribute('id', className);
		return div;
	}

	_createCloseButton() {
		const closeButt = document.createElement('button');
		closeButt.setAttribute('class', 'close');
		this.modal.appendChild(closeButt);
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



    </div>

`;

export default Modal;
