"use strict";

const validation = () => {
	// Валидация калькулятора и полей инпут
	const inputCalc = document.querySelectorAll(".input-calc");
	// Валидация имени
	const inputName = document.querySelectorAll(".input-name");
	// Валидация мэйла
	const inputEmail = document.querySelectorAll(".input-email");
	// Валидация телефона
	const inputPhone = document.querySelectorAll(".input-phone");
	// Валидация инпута с текстом(Ваше сообщение)
	const inputMessage = document.getElementById("form2-message");

	// Валидация калькулятора и полей инпут
	inputCalc.forEach((input) => {
		input.addEventListener("input", (event) => {
			const inputValue = event.target.value;
			const onlyNumbers = inputValue.replace(/\D/g, ""); // Оставляем только цифры

			event.target.value = onlyNumbers; // Заменяем значение поля только цифрами
		});
	});

	inputMessage.addEventListener("input", (event) => {
		const inputValue = event.target.value;
		const onlyCyrillic = inputValue.replace(/[^а-яА-ЯёЁ\s-]/g, ""); // Оставляем только кириллицу, дефис и пробел

		event.target.value = onlyCyrillic; // Заменяем значение поля только кириллицей, дефисом и пробелом
	});

	// Валидация имени
	inputName.forEach((input) => {
		input.addEventListener("input", (event) => {
			const inputValue = event.target.value;
			const onlyCyrillic = inputValue.replace(/[^а-яА-ЯёЁ\s-]/g, ""); // Оставляем только кириллицу, дефис и пробел

			event.target.value = onlyCyrillic; // Заменяем значение поля только кириллицей, дефисом и пробелом
		});
	});

	// Валидация мэйла
	inputEmail.forEach((input) => {
		input.addEventListener("input", (event) => {
			const inputValue = event.target.value;
			const onlyLatin = inputValue.replace(/[^a-zA-Z0-9@\-_.!~*']/g, ""); // Оставляем только латиницу, цифры и специальные символы

			event.target.value = onlyLatin; // Заменяем значение поля только латиницей, цифрами и специальными символами
		});
	});

	// Валидация телефона
	inputPhone.forEach((input) => {
		input.addEventListener("input", (event) => {
			const inputValue = event.target.value;
			const onlyDigitsAndSymbols = inputValue.replace(/[^\d()\-]/g, ""); // Оставляем только цифры, круглые скобки и дефис

			event.target.value = onlyDigitsAndSymbols; // Заменяем значение поля только цифрами, круглыми скобками и дефисом
		});
	});
};

export default validation;
