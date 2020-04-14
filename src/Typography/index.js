
import styles from './style.scss';
class Typography extends HTMLElement {
    constructor() {
    super();
      // Add a shadow DOM
    const shadowDom = this.attachShadow({mode:'open'});
    this._elementText="p"
     shadowDom.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {
        if(this.hasAttribute('variante')){
        this._elementText = this.getAttribute('variante') ;
        }
        const elementText = document.createElement(this._elementText);
        elementText.textContent = this.textContent;
        this.shadowRoot.appendChild(elementText);
        this.innerHTML ='';

      }
      attributeChangedCallback(name,oldValue,newValue){
       let attrib = this.getAttribute(name)
        if(this.hasAttribute('color',attrib)){
          this.setAttribute('class',`color-${attrib}`)
        }
      }
      static get observedAttributes() {
        return ['color']
      }
    }
    const template = document.createElement('template');
    template.innerHTML = `
    <style>${styles.toString()}</style>

  `;



  export default Typography;