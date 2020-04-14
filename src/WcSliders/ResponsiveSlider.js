/**
 * composition @class WcSlider
 * A slider/carousel Web Component.
 */
class ResponsiveSlider {
	/**
	 * @param {*} shadowRoot
	 * @param {*} _items
	 * @param {*} props
	 * @param {*} container
	 * @param {*} props._slidesVisible props._defaultArrow custom arrow Icon
	 * @param {*} props.loop props.loop Doit-on boucler en fin de slide ?
	 */
	constructor(shadowRoot, _items, props, container, setStyle) {
		this.shadowRoot = shadowRoot;
		this._items = _items;
		this.props = props;
		this.setStyle = setStyle;
		this.container = container;
		this.isMobile = false;
		this._currentSlide = 0;
		this.moveCallbacks = [];
		this.slideTo();
		window.addEventListener('resize', this.slideTo.bind(this));
	}

	slideTo() {
		let keyResponsives = Object.keys(this.props.responsive);
		let windowScreenWidth = window.screen.width;
		if (windowScreenWidth < keyResponsives[keyResponsives.length - 1]) {
			for (let i = 0; i < keyResponsives.length; i++) {
				if (keyResponsives[i] < windowScreenWidth && windowScreenWidth < keyResponsives[i + 1]) {
					this.props.slidesVisible = this.props.responsive[keyResponsives[i]].slidesVisible;
					this.props.slidesToScroll = this.props.responsive[keyResponsives[i]].slidesToScroll;
				}
			}
		} else {
			this.props.slidesVisible = this.props.responsive[keyResponsives[keyResponsives.length - 1]].slidesVisible;
			this.props.slidesToScroll = this.props.responsive[keyResponsives[keyResponsives.length - 1]].slidesToScroll;
		}
		this.setStyle();
	}

	//get slide visible
}
export default ResponsiveSlider;
