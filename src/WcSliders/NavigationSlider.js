import ResponsiveSlider from './ResponsiveSlider';
/**
 * composition @class WcSlider
 * A slider/carousel Web Component.
 */
class NavigationSlider {
	/**
	 * @param {*} shadowRoot
	 * @param {*} _items
	 * @param {*} props
	 * @param {*} container
	 * @param {*} props.slidesVisible props._defaultArrow custom arrow Icon
	 * @param {*} props.loop props.loop Doit-on boucler en fin de slide ?
	 */
	constructor(shadowRoot, _items, props, container) {
		this.shadowRoot = shadowRoot;
		this._items = _items;
		this.props = props;
		this.container = container;

		this._currentSlide = 0;
		this.moveCallbacks = [];
	}

	/**
	 * A slider/carousel Web Component.
	 */
	createNavigation() {
		let nextButton = this.shadowRoot.querySelector('.carousel__next');
		let prevButton = this.shadowRoot.querySelector('.carousel__prev');
		prevButton.style.background = `url(${this.props._defaultArrow}) #fff center center no-repeat`;
		nextButton.style.background = `url(${this.props._defaultArrow}) #fff center center no-repeat`;
		nextButton.addEventListener('click', this.next.bind(this));
		prevButton.addEventListener('click', this.prev.bind(this));
		if (this.props.loop === true) return;
		this.onMove(index => {
			if (index === 0) {
				prevButton.setAttribute('disabled', '');
				prevButton.classList.add('disabled');
			} else {
				prevButton.removeAttribute('disabled', '');
				prevButton.classList.remove('disabled');
			}
			if (index === this._items.length - this.props.slidesVisible) {
				nextButton.setAttribute('disabled', '');
				nextButton.classList.add('disabled');
			} else {
				nextButton.removeAttribute('disabled', '');
				nextButton.classList.remove('disabled');
			}
		});
	}

	/**
	 * @memberof NavigationSlider
	 */

	next() {
		this.props.id === 1;
		this.gotoItem(this._currentSlide + this.props.slidesToScroll);
	}
	prev() {
		this.gotoItem(this._currentSlide - this.props.slidesToScroll);
	}

	gotoItem(index) {
		if (index < 0) {
			index = this._items.length - this.props.slidesToScroll;
		} else if (index >= this._items.length) {
			index = 0;
		}
		let transformX = index * (-100 / this._items.length) + '%';
		this.container.style.transform = `translate3d(${transformX},0,0)`;
		this._currentSlide = index;
		this.initOnMove(index);
	}
	initOnMove(index) {
		this.moveCallbacks.forEach(cb => cb(index));
	}
	getAttrib(name) {
		if (this.hasAttribute(name)) {
			return this.getAttribute(name);
		}
	}
	/**
	 * @param {*} cb

	 */
	onMove(cb) {
		this.moveCallbacks.push(cb);
	}
}
export default NavigationSlider;
