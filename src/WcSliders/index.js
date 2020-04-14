import NavigationSlider from './NavigationSlider';
import ResponsiveSlider from './ResponsiveSlider';
import style from './style.scss';

/**
 * @class WcSlider
 * @extends {HTMLElement}
 */
class WcSlider extends HTMLElement {
	/**
	 * @variable {HTMLElement} shadowRoot template html.
	 * @props  {object} Default props
	 * @props  {object} props.slidesToScroll Nombres d'element à faire defiler
	 * @props  {object} props._slidesVisible  Nombres d'element visible dans le slide
	 * @props  {object} props._defaultArrow custom arrow Icon
	 * @props  {boolean} props.loop Doit-on boucler en fin de slide ?
	 */
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(templates.content.cloneNode(true));

		this.carousel = this.shadowRoot.querySelector('.carousel');
		this.container = this.shadowRoot.querySelector('.carousel__container');
		this._error = this.shadowRoot.querySelector('p');
		this.isMobile = false;
		this._items = [];

		this.props = {
			id: 0,
			slidesToScroll: 2,
			slidesVisible: 2,
			_defaultArrow: 'public/img/keyboard_arrow_right-black-18dp.svg',
			loop: false,
			responsiveClass: false,
			responsive: {
				0: {
					slidesToScroll: 1,
					slidesVisible: 1,
					nav: true
				},
				800: {
					slidesToScroll: 1,
					slidesVisible: 3,
					nav: false
				}
			}
		};
	}
	//if has attrbute responsive ,  key of this.attr with loop responsive key

	/**
	 * any attribute specified in the following array will automatically
	 * trigger attributeChangedCallback when you modify it.
	 * @memberof WcSlider
	 */
	static get observedAttributes() {
		return ['slidesVisible', 'slidesToScroll', 'loop'];
	}
	//
	/**
	 * méthodes de cycle de vie  quand le composant est monté
	 */
	connectedCallback() {
		this.props.slidesToScroll = Number(this.getAttrib('slidesToScroll'));
		this.props.slidesVisible = Number(this.getAttrib('slidesVisible'));
		let children = [].slice.call(this.children);
		this._items = children;
		this.InitResponsiveSlider();
		this.setStyle();
		if (this.hasAttribute('loop')) {
			this.props.loop = true;
		}
		this.createNavigation();
	}

	InitResponsiveSlider() {
		new ResponsiveSlider(this.shadowRoot, this._items, this.props, this.container, this.setStyle);
	}

	/**
	 * @param {*} name
	 * @returns {name}   la valeur d'un attribut donné de l'élément spécifié
	 */
	getAttrib(name) {
		if (this.hasAttribute(name)) {
			return this.getAttribute(name);
		} else {
			return `${this.props[name]}\n`;
		}
	}

	/**
	 * applique les bonnes dimention au carousel
	 */
	setStyle() {
		//console.log(this.props.slidesToScroll, 'test');
		let ratio = this._items.length / this.props.slidesVisible;
		this.container.style.width = ratio * 100 + '%';
		this._items.map(item => {
			item.style.width = 100 / this.props.slidesVisible / ratio + '%';
		});
	}

	/**
	 * @param {*} className
	 * @returns {HTMLElement}
	 */
	_createElemwithClass(className) {
		const div = document.createElement('div');
		div.setAttribute('class', className);
		return div;
	}

	/**
	 *Load navigation if
	 */
	createNavigation() {
		let Initnavigation = new NavigationSlider(this.shadowRoot, this._items, this.props, this.container);
		Initnavigation.createNavigation();
		if (this.props.loop === false) {
			Initnavigation.initOnMove(0);
		}
	}
}

const templates = document.createElement('template');
templates.innerHTML = `
        <style>${style.toString()}</style>
        <div class="carousel">
            <div class="carousel__container">
                <slot> </slot>
            </div>
            <button class="carousel__next"></button>
            <button class="carousel__prev"></button>
        </div>

  `;

export default WcSlider;
