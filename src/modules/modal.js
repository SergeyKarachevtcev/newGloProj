"use strict";

import { animate } from "./helpers";

const modal = () => {
	const popupBtns = document.querySelectorAll(".popup-btn");
	const modal = document.querySelector(".popup");

	popupBtns.forEach((popupBtn) => {
		popupBtn.addEventListener("click", () => {
			if (window.innerWidth >= 768) {
				//запускаем функцию анимации
				animate({
					duration: 500,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						modal.style.opacity = progress;
						modal.style.display = "block";
					},
				});
				
			} else {
				modal.style.display = "block"; // Отображаем модальное окно без анимации
			}
		});
	});

	modal.addEventListener("click", (e) => {
		if (
			!e.target.closest(".popup-content") ||
			e.target.classList.contains("popup-close")
		) {
			if (window.innerWidth >= 768) {
				animate({
					duration: 1000,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						modal.style.opacity = progress;
						modal.style.display = "none";
					},
				});
			} else {
				modal.style.display = "none"; // Скрываем модальное окно без анимации
			}
		}
	});
};

export default modal;
