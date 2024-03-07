"use strict";

const slider = () => {
	const sliderBlock = document.querySelector(".portfolio-content");
	const slides = document.querySelectorAll(".portfolio-item");
	const portfolioDots = document.querySelector(".portfolio-dots");
	let dots = document.querySelectorAll(".dot");
	let timerInterval = 10000;
	let currentSlide = 0;
	let interval;

	const createDot = () => {
		slides.forEach((index) => {
			const dot = document.createElement("li");
			dot.classList.add("dot");
			portfolioDots.appendChild(dot);
			const dots = portfolioDots.querySelectorAll("li")[0];
			dots.classList.add("dot-active");
		});
	};
	const prevSlide = (elems, index, strClass) => {
		elems[index].classList.remove(strClass);
	};
	const nextSlide = (elems, index, strClass) => {
		elems[index].classList.add(strClass);
	};

	const autoSlide = () => {
		dots = document.querySelectorAll(".dot");
		prevSlide(slides, currentSlide, "portfolio-item-active");
		prevSlide(dots, currentSlide, "dot-active");
		currentSlide++;
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		nextSlide(slides, currentSlide, "portfolio-item-active");
		nextSlide(dots, currentSlide, "dot-active");
	};

	const startSlide = (timer = 2000) => {
		interval = setInterval(autoSlide, timer);
	};
	const stopSlide = () => {
		clearInterval(interval);
	};

	sliderBlock.addEventListener("click", (e) => {
		dots = document.querySelectorAll(".dot");
		e.preventDefault();
		if (!e.target.matches(".dot , .portfolio-btn ")) {
			return;
		}
		prevSlide(slides, currentSlide, "portfolio-item-active");
		prevSlide(dots, currentSlide, "dot-active");
		if (e.target.matches("#arrow-right")) {
			currentSlide++;
		} else if (e.target.matches("#arrow-left")) {
			currentSlide--;
		} else if (e.target.classList.contains("dot")) {
			dots.forEach((dot, index) => {
				if (e.target === dot) {
					currentSlide = index;
				}
			});
		}
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}
		nextSlide(slides, currentSlide, "portfolio-item-active");
		nextSlide(dots, currentSlide, "dot-active");
	});
	sliderBlock.addEventListener(
		"mouseenter",
		(e) => {
			if (e.target.matches(".dot , .portfolio-btn ")) {
				stopSlide();
			}
		},
		true
	);
	sliderBlock.addEventListener(
		"mouseleave",
		(e) => {
			if (e.target.matches(".dot , .portfolio-btn ")) {
				startSlide(timerInterval);
			}
		},
		true
	);
	createDot();
	startSlide(timerInterval);
};

export default slider;
