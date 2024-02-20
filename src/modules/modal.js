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
			modal.style.opacity = "1";
			setTimeout(() => {
				modal.style.transition = "opacity 0.5s"; // Добавляем плавную анимацию с помощью свойства transition
				modal.style.opacity = "0"; // Постепенно увеличиваем прозрачность до 1
			}, 100);
		}
		modal.style.display = "none";
	});
};

export default modal;
