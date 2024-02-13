let dayOrNight = document.getElementById("day_night");
let dayWeek = document.getElementById("day_week");
let CurrentTime = document.getElementById("Current_time");
let newYear = document.getElementById("new_year");

function getCurrentTime() {
	let  now = new Date();
	let hour = now.getHours();
	let day = now.getDay();
	let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	let timeOfDay;

	if (hour < 6) {
		timeOfDay = "ночь";
	} else if (hour < 12) {
		timeOfDay = "утро";
	} else if (hour < 18) {
		timeOfDay = "день";
	} else {
		timeOfDay = "вечер";
	}
	let formattedHour = hour;
	let minute = now.getMinutes();
	let formattedMinute = minute;
	let second = now.getSeconds();
	let formattedSecond = second;
	let daysRemaining = getDaysUntilNewYear();
	dayOrNight.textContent = timeOfDay;
	dayWeek.textContent = daysOfWeek[day];
	CurrentTime.textContent = formattedHour + ":" + formattedMinute + ":" + formattedSecond;
	newYear.textContent = daysRemaining;
}
function getDaysUntilNewYear() {
	var now = new Date();
	var currentYear = now.getFullYear();
	var newYear = new Date(currentYear + 1, 0, 1);
	var timeRemaining = newYear.getTime() - now.getTime();
	var daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
	return daysRemaining;
}

setInterval(getCurrentTime, 1000);