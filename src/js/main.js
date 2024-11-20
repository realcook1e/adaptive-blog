import "../scss/styles.scss";

document.addEventListener("DOMContentLoaded", () => {
	const menuList = document.querySelector(".menu__list");
	const hamburger = document.querySelector(".menu-hamburger");

	hamburger.addEventListener("click", () => {
		if (hamburger.classList.contains("menu-hamburger_active")) {
			hamburger.classList.remove("menu-hamburger_active");
			menuList.classList.remove("menu__list_active");
		} else {
			hamburger.classList.add("menu-hamburger_active");
			menuList.classList.add("menu__list_active");
		}
	});
});
