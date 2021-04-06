var swiper = new Swiper('.best-sellers__slider', {

	//Кол-во слайдов для показа
	slidesPerView: 4,
	//Отступ между слайдами
	spaceBetween: 18,
	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,
	//Бесконечность
	loop: true,
	/* //Автопрокрутка
	autoplay: {
		//Пауза между прокрутками
		delay: 1000,
		//Закончить на последнем слайде
		stopOnLastSlide: false,
		//Отключить после ручного переключения
		disableOnInteraction: false
	}, */

	navigation: {
		nextEl: '.best-sellers__next',
		prevEl: '.best-sellers__prev',
	},

	//Брейкпоинты (адаптив)
	
	breakpoints: {
		// when window width is >= 300px
		300: {
			slidesPerView: 1,

		},
		// when window width is >= 500px
		500: {
			slidesPerView: 2,

		},
		// when window width is >= 700px
		700: {
			slidesPerView: 3,

		},
		// when window width is >= 920px
		920: {
			slidesPerView: 4,

		}
	}, 
});