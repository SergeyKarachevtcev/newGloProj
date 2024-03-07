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
					duration: 400,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						modal.style.opacity = progress;
						modal.style.display = "block";
					},
				});
			} else {
				modal.style.display = "block";
			}
		});
	});
	modal.addEventListener("click", (e) => {
		if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
			if (window.innerWidth >= 768) {
				animate({
					duration: 200,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						modal.style.opacity = 1 - progress;
						if (progress >= 1) {
							modal.style.display = "none";
						}
					},
				});
			} else {
				modal.style.display = "none";
			}
		}
	});
};

export default modal;
