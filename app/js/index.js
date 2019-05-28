$(document).ready(() => {
	// Footer
	$('.footer__button').click(() => {
		$('.footer__hidden').slideToggle();
	});

	// Slider
	$('.slider--main').slick({
		arrows: false,
		infinite: false,
		dots: true,
		customPaging: function(slider, i) {
			const title = $(slider.$slides[i]).data('title');
			return `<button>${title}</button>`;
		},
		fade: true,
		swipe: false,
		adaptiveHeight: true,
	});

	$('.slider--secondary').slick({
		infinite: false,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 993,
				settings: {
					arrows: false,
				},
			},
		],
	});

	// Yadex maps
	ymaps.ready(() => {
		const myMap = new ymaps.Map('map', {
			center: [53.199595, 50.10561],
			zoom: 16,
			controls: ['smallMapDefaultSet'],
		});
		myMap.behaviors.disable('scrollZoom');

		const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div></div>'
		);

		const myPlacemark = new ymaps.Placemark(
			myMap.getCenter(),
			{
				balloonContent: 'ул.Ульяновская д.19',
			},
			{
				iconLayout: 'default#image',
				iconImageHref: '../img/map-mark.png',
				iconImageSize: [25, 32],
				iconImageOffset: [-5, -38],
			}
		);
		myMap.geoObjects.add(myPlacemark);
	});

	// Hamburger
	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.toolbar__mobile').slideToggle();
	});
});
