"use strict";

const menu = () => {
	const menuBtn = document.querySelector(".menu");
	const menu = document.querySelector("menu");
	const closeBtn = menu.querySelector(".close-btn");
	const handleMenu = (event) => {
		if (
			menuBtn ||
			event.target.classList.contains("menu") ||
			event.target === closeBtn
		) {
			menu.classList.toggle("active-menu"); // добавляю или отменяю класс у кнопки меню , кнопки закрытия
		} else if (event.target.closest("ul>li>a")) {
			menu.classList.remove("active-menu");
		}
	};
	document.addEventListener("click", handleMenu); // Запускаем функцию делегирования события
};

export default menu;
