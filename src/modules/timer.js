"use strict";

const timer = (deadline) => {
	const timerHours = document.getElementById("timer-hours");
	const timerMinutes = document.getElementById("timer-minutes");
	const timerSeconds = document.getElementById("timer-seconds");
	let timerInterval;
	const updateClock = () => {
		let dateStop = new Date(deadline).getTime();
		let dateNow = new Date().getTime();
		let timeRemaining = (dateStop - dateNow) / 1000;
		let hours = Math.floor(timeRemaining / 60 / 60);
		let minutes = Math.floor((timeRemaining / 60) % 60);
		let seconds = Math.floor(timeRemaining % 60);

		let formattedHours;
		if (hours < 10) {
			formattedHours = "0" + hours;
		} else {
			formattedHours = hours;
		}

		let formattedMinutes;
		if (minutes < 10) {
			formattedMinutes = "0" + minutes;
		} else {
			formattedMinutes = minutes;
		}

		let formattedSeconds;
		if (seconds < 10) {
			formattedSeconds = "0" + seconds;
		} else {
			formattedSeconds = seconds;
		}
		timerHours.textContent = formattedHours;
		timerMinutes.textContent = formattedMinutes;
		timerSeconds.textContent = formattedSeconds;

		if (timeRemaining < 0) {
			timerHours.textContent = "00";
			timerMinutes.textContent = "00";
			timerSeconds.textContent = "00";
			clearInterval(timerInterval);
		}
	};
	updateClock();
	timerInterval = setInterval(updateClock, 1000);
};

export default timer;
