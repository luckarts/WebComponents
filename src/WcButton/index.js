
import style from './style.scss';
class WcButton extends HTMLElement {
    constructor() {
    super();
      // Add a shadow DOM
    const shadowDom = this.attachShadow({mode:'open'});
     shadowDom.appendChild(templates.content.cloneNode(true));
    }
    connectedCallback() {

      }
    attributeChangedCallback(name,oldValue,newValue){

		let color='',variante='',attrib;

		if(this.hasAttribute('variante')){
			attrib = this.getAttribute('variante');
			variante='button-'+attrib;
		}

		if(this.hasAttribute('color')){
			attrib = this.getAttribute('color');
			color='-'+attrib;
		}
		if(this.hasAttribute('endIcon')){
			attrib = this.getAttribute('endIcon');
			const icon = document.createElement(attrib)
			this.shadowRoot.appendChild(icon);
		}
		if(color||variante){
		this.setAttribute('class',`color${color} ${variante}`)
}
    }

      static get observedAttributes() {
        return ['color','variante']
      }
    }

    const templates = document.createElement('template');
    templates.innerHTML = `
      	<style>${style.toString()}</style>
	    <button class="button-native">
	    <slot></slot>
	    </button>
  `;



  export default WcButton;