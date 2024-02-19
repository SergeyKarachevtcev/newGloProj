"use strict";

const slider = () => {
	//portfolio-item-active
	const sliderBlock = document.querySelector(".portfolio-content");
	const slides = document.querySelectorAll(".portfolio-item");
	const dots = document.querySelectorAll(".dot");

	let timerInterval = 3000;
	//текущий слайд
	let currentSlide = 0;

	let interval;

	//функция смены активного слайда , удаляем класс у текщего слайда
	const prevSlide = (elems, index, strClass) => {
		elems[index].classList.remove(strClass);
	};
	//функция смены активного слайда , добавляем класс следующему слайду
	const nextSlide = (elems, index, strClass) => {
		elems[index].classList.add(strClass);
	};

	//функция авто прокрутки слайда
	const autoSlide = () => {
		prevSlide(slides, currentSlide, "portfolio-item-active");
		prevSlide(dots, currentSlide, "dot-active"); //отнимаем класс у обьяекта (точка)
		currentSlide++;
		//если слайды подобшил к концу (стали больше длинны списка слайдов), счетчик слайдов обнуляется
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		nextSlide(slides, currentSlide, "portfolio-item-active");
		nextSlide(dots, currentSlide, "dot-active"); //добавляем класс обьяекту (точка)
	};

	//функция интервала прокрутки слайда
	const startSlide = (timer = 2000) => {
		interval = setInterval(autoSlide, timer);
	};
	const stopSlide = () => {
		clearInterval(interval);
	};

	sliderBlock.addEventListener("click", (e) => {
		e.preventDefault();

		if (!e.target.matches(".dot , .portfolio-btn ")) {
			return;
		}

		prevSlide(slides, currentSlide, "portfolio-item-active");
		prevSlide(dots, currentSlide, "dot-active"); //отнимаем класс у обьяекта (точка)

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

		//если слайды подобшил к концу (стали больше длинны списка слайдов), счетчик слайдов обнуляется
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		//если слайды идут в другую сторону (стали меньше нуля), счетчик слайдов приравнивается к длинне массива -1
		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}

		nextSlide(slides, currentSlide, "portfolio-item-active");
		nextSlide(dots, currentSlide, "dot-active"); //добавляем класс обьяекту (точка)
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

	startSlide(timerInterval);
};

export default slider;
