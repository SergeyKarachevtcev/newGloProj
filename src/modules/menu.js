"use strict";

const menu = () => {
	const menuBtn = document.querySelector(".menu");
	const menu = document.querySelector("menu");
	const closeBtn = menu.querySelector(".close-btn");
	const menuItems = menu.querySelectorAll("ul>li>a");

	const handleMenu = (event) => {
		if (
			event.target.classList.contains("menu") ||
			event.target === closeBtn
		) {
			menu.classList.toggle("active-menu");
		} else if (event.target.closest("ul>li>a")) {
			menu.classList.remove("active-menu");
		}
	};
	document.addEventListener("click", handleMenu); // Запускаем функцию делегирования события
	menuBtn.addEventListener("click", () => {
		menu.classList.toggle("active-menu");
	});
};

export default menu;
