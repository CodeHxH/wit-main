// Slider settings
$(document).ready(function () {
	$('.slider').slick({
		Infinite: true,
		autoplay: true,
		slidesToShow: 10,
		slidesToScroll: 1,
		accessibility: false,
		arrows: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	});
});

// Initializing AOS scroll library
AOS.init();
