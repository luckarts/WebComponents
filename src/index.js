import Modal from './Modal';

const openModal = document.querySelector('button');
const modal = document.querySelector('wc-modal');
openModal.addEventListener('click', () => {
	if (!modal.isOpen) {
		modal.open();
	}
});

customElements.define('wc-modal', Modal);
