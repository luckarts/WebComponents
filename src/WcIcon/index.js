
import style from './style.scss';
class WcIcon extends HTMLElement {
    constructor() {
    super();
      // Add a shadow DOM
    const shadowDom = this.attachShadow({mode:'open'});
     shadowDom.appendChild(templates.content.cloneNode(true));
    }
    }

    const templates = document.createElement('template');
    templates.innerHTML = `
      	<style>${style.toString()}</style>
<slot></slot>
  `;



  export default WcIcon;