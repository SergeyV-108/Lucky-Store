//================ Активация бургера и меню ================
let menuBurger = document.querySelector('.burger');
let itemMenuList = document.querySelector('.item-menu__list');

menuBurger.onclick = function () {
	menuBurger.classList.toggle('active');
	itemMenuList.classList.toggle('active');
};
//===========================================================
//============== Появление меню с классом fixed =============
let menuPage = document.querySelector('.menu-page');
let headerHeight = document.querySelector('.header');

window.addEventListener('scroll', function () {
	if (headerHeight.offsetHeight < window.pageYOffset) {
		menuPage.classList.add('fixed');
	} else {
		menuPage.classList.remove('fixed');
	}
});
//===========================================================
// ================= Инициализация анимации =================
AOS.init({
	disable: 'tablet',
	disable: 'mobile',
	disable: 'phone',
});
//===========================================================
const form = document.getElementById('form');
form.addEventListener("submit", formSend);

async function formSend(e) {
	e.preventDefault();

	let error = formValidate(form);

	let formData = new FormData(form);


	if (error === 0) {
		form.classList.add('sending');

		//анимация отпарвки формы
		let columnForm = document.querySelector('.column-form');
		let columnFormButton = document.querySelector('.column-form__button');
		columnForm.classList.add('active');

		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formData
		});

		if (response.ok) {
			let result = await response.json();
			alert(result.message);
			form.reset();
			form.classList.remove('sending');
			columnForm.classList.remove('active');
		} else {
			alert("Error");
			form.classList.remove('sending');
		}
	}
}

function formValidate(form) {
	let error = 0;
	let formsReq = document.querySelectorAll('.req');
	let tooltip = document.querySelector('.column-form__tooltip');

	for (formReq of formsReq) {
		formRemoveError(formReq);
		tooltipRemoveShow(tooltip)

		if (formReq.classList.contains('email')) {
			if (emailTest(formReq)) {
				formAddError(formReq);
				error++;
				tooltipAddShow(tooltip);
			}
		} else {
			if (formReq.value === '') {
				formAddError(formReq);
				error++;
			}
		}
	}
	return error;
}

function tooltipAddShow(tooltip) {
	tooltip.classList.add('show');
}
function tooltipRemoveShow(tooltip) {
	tooltip.classList.remove('show');
}

function formAddError(formReq) {
	formReq.parentElement.classList.add('error');
	formReq.classList.add('error');
}
function formRemoveError(formReq) {
	formReq.parentElement.classList.remove('error');
	formReq.classList.remove('error');
}
//Функция теста email
function emailTest(formReq) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formReq.value);
}
