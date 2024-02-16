"use strict";

const modal = () => {
	const popupBtns = document.querySelectorAll(".popup-btn");
	const modal = document.querySelector(".popup");
	
	popupBtns.forEach((popupBtn) => {
		popupBtn.addEventListener("click", () => {
			if (window.innerWidth >= 768) {
				// Проверяем ширину экрана
				modal.style.opacity = "0"; // Устанавливаем начальное значение прозрачности модального окна
				modal.style.display = "block";
				setTimeout(() => {
					modal.style.transition = "opacity 0.5s"; // Добавляем плавную анимацию с помощью свойства transition
					modal.style.opacity = "1"; // Постепенно увеличиваем прозрачность до 1
				}, 100);
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
				// Проверяем ширину экрана
				modal.style.opacity = "0"; // Устанавливаем начальное значение прозрачности модального окна
				setTimeout(() => {
					modal.style.display = "none";
				}, 200); // Задержка перед скрытием модального окна
			} else {
				modal.style.display = "none"; // Скрываем модальное окно без анимации
			}
		}
	});
};

export default modal;
