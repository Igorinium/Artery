const menuClose = () => {
	$('.header__burger,.header__nav').toggleClass('active');
	$('body').toggleClass('lock');
	$('.header__gray').toggleClass('active');
};

$(document).ready(function () {
	$('.header__burger').click(function () {
		menuClose();
	});
	$('.header__gray').click(function () {
		menuClose();
	});
	$('.header__nav a').click(function () {
		if ($('.header__nav').hasClass('active')) {
			menuClose();
		}
	});
	//язык
	$('.language-icon').click(function () {
		$('.language-icon').toggleClass('active');
	});

	$('.language-icon').click(function () {
		let id = document.querySelector('.language-icon__icon.active').getAttribute('id');
		document.querySelector('body').setAttribute('class', id);
	});
	//смена языка
	document.querySelector('.language-icon__list').addEventListener('click', (e) => {
		if (e.target.classList.contains('language-icon__icon')) {
			let activeLang = document.querySelector('.language-icon__icon.active');
			document.querySelector('.language-icon__list').insertBefore(activeLang, document.querySelector('.language-icon__list').children[0]);
			$('.language-icon__icon').removeClass('active');
			document.querySelector('.language-icon').insertBefore(e.target, document.querySelector('.language-icon').children[0]);
			$(e.target).addClass('active');
		}
	});

	$('.news__link').click(function () {
		localStorage.setItem('text', $(this).closest('.news__item').html());
	})
});


particlesJS("particles-js", {
	"particles": {
		"number": { "value": 27, "density": { "enable": true, "value_area": 800 } },
		"color": { "value": "#ffffff" }, "shape": {
			"type": "circle", "stroke": { "width": 0, "color": "#000000" },
			"polygon": { "nb_sides": 6 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 }
		},
		"opacity": { "value": 0.16024100246771156, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
		"size": { "value": 32.04691668602835, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
		"line_linked": { "enable": false, "distance": 0, "color": "#ffffff", "opacity": 0.4, "width": 1 },
		"move": {
			"enable": true, "speed": 6, "direction": "none", "random": false,
			"straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
		}
	},
	"interactivity": {
		"detect_on": "canvas", "events": {
			"onhover": { "enable": true, "mode": "repulse" },
			"onclick": { "enable": true, "mode": "push" }, "resize": true
		}, "modes": {
			"grab": {
				"distance": 400,
				"line_linked": { "opacity": 1 }
			}, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
			"repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 }
		}
	},
	"retina_detect": true
});



let myImageSlider2 = new Swiper('.university-slider', {
	// Стрелки
	navigation: {
		nextEl: '.u-slider-button-next',
		prevEl: '.u-slider-button-prev'
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.u-slider-pagination',
	},


	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 30,
	loop: true,

});

