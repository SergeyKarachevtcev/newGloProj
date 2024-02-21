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
			
			//скрытие модакли в ручну
/* 			modal.style.transition = "opacity 0.5s"; // Добавляем плавную анимацию с помощью свойства transition
			modal.style.opacity = "0"; // Постепенно увеличиваем прозрачность до 1
			setTimeout(() => {
				modal.style.display = "none";
			}, 500); // После завершения анимации скрываем модальное окно */

			//скрытие модалки при помощи функции animate
			if (window.innerWidth >= 768) {
				//запускаем функцию анимации
				animate({
					duration: 500,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						modal.style.opacity = 1 - progress; // поворачиваем в спять функуцию
						if (progress >= 1) {
							modal.style.display = "none"; // отключаем модалку после завершения анимации
						}
					},
				});
			} else {
				modal.style.display = "none"; // отключаем модальное окно без анимации
			}
		}
	});
};

export default modal;
