/*======== Активация бургера и меню ========*/

let menuBurger = document.querySelector('.burger');
let itemMenuList = document.querySelector('.item-menu__list');

menuBurger.onclick = function () {
	menuBurger.classList.toggle('active');
	itemMenuList.classList.toggle('active');
};

/*======== Появление меню с классом fixed ========*/
let menuPage = document.querySelector('.menu-page');
let headerHeight = document.querySelector('.header');

window.addEventListener('scroll', function () {
	if (headerHeight.offsetHeight < window.pageYOffset) {
		menuPage.classList.add('fixed');
	}else{
		menuPage.classList.remove('fixed');
	}
});
