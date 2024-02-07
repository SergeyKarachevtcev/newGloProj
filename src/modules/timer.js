"use strict";

const timer = (deadline) => {
	const timerHours = document.getElementById("timer-hours");
	const timerMinutes = document.getElementById("timer-minutes");
	const timerSeconds = document.getElementById("timer-seconds");
	const updateClock = () => {
		let dateStop = new Date(deadline).getTime();
		let dateNow = new Date().getTime();
		let timeRemaining = (dateStop - dateNow) / 1000;

		let hours = Math.floor(timeRemaining / 60 / 60);
		let minutes = Math.floor((timeRemaining / 60) % 60);
		let seconds = Math.floor(timeRemaining % 60);

		// Вывод времени с нулем
		// часы
		let formattedHours;
		if (hours < 10) {
			formattedHours = "0" + hours;
		} else {
			formattedHours = hours;
		}
		// минуты
		let formattedMinutes;
		if (minutes < 10) {
			formattedMinutes = "0" + minutes;
		} else {
			formattedMinutes = minutes;
		}
		// секунды 
		let formattedSeconds;
		if (seconds < 10) {
			formattedSeconds = "0" + seconds;
		} else {
			formattedSeconds = seconds;
		}

		// Вывод времени с нулем
		timerHours.textContent = formattedHours;
		timerMinutes.textContent = formattedMinutes;
		timerSeconds.textContent = formattedSeconds;

		if (timeRemaining < 0) {
			timerHours.textContent = "00";
			timerMinutes.textContent = "00";
			timerSeconds.textContent = "00";
			clearInterval(timerInterval); // Останавливаем интервал, если время истекло
		}
	};

	updateClock();
	const timerInterval = setInterval(updateClock, 1000);
};

export default timer;
