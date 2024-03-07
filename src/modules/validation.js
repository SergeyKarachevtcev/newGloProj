"use strict";

const validation = () => {
	const inputCalc = document.querySelectorAll(".input-calc");
	const inputName = document.querySelectorAll(".input-name");
	const inputEmail = document.querySelectorAll(".input-email");
	const inputPhone = document.querySelectorAll(".input-phone");
	const inputMessage = document.getElementById("form2-message");

	inputCalc.forEach((input) => {
		input.addEventListener("input", (event) => {
			const inputValue = event.target.value;
			const onlyNumbers = inputValue.replace(/\D/g, "");
			event.target.value = onlyNumbers;
		});
	});

	inputMessage.addEventListener("input", (event) => {
		const inputValue = event.target.value;
		const onlyCyrillic = inputValue.replace(/[^а-яА-ЯёЁ\s-]/g, "");
		event.target.value = onlyCyrillic;
	});

	// Валидация имени
	inputName.forEach((input) => {
		input.addEventListener("input", (event) => {
			const inputValue = event.target.value;
			const onlyCyrillic = inputValue.replace(/[^а-яА-ЯёЁ\s]/g, "");
			event.target.value = onlyCyrillic;
		});
	});

	// Валидация мэйла
	inputEmail.forEach((input) => {
		input.addEventListener("input", (event) => {
			const inputValue = event.target.value;
			const onlyLatin = inputValue.replace(/[^a-zA-Z0-9@\-_.!~*']/g, "");
			event.target.value = onlyLatin;
		});
	});

	inputPhone.forEach((input) => {
		input.addEventListener("input", (event) => {
			const inputValue = event.target.value;
			const onlyDigitsAndSymbols = inputValue.replace(/[^\d()\-]/g, "");
			event.target.value = onlyDigitsAndSymbols;
		});
	});
};

export default validation;
