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

$('.slider--info').slick({
	infinite: false,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
});
$('.slider--quality').slick({
	infinite: false,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
});
$('.slider--charity').slick({
	infinite: false,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
});
