import Modal from './Modal';
import WcButton from './WcButton';
import WcIcon from './WcIcon';
import Typography from './Typography';
import WcSlider from './WcSliders';

const openModal = document.querySelector('wc-button');
const modal = document.querySelector('wc-modal');
openModal.addEventListener('click', () => {
	if (!modal.isOpen) {
		modal.open();
	}
});

customElements.define('wc-slider', WcSlider);
customElements.define('wc-icon', WcIcon);
customElements.define('wc-modal', Modal);
customElements.define('wc-button', WcButton);
customElements.define('wc-typographie', Typography);
