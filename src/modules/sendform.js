"use strict";
const sendForm = ({ formId, sumeElem = [] }) => {
	const form = document.getElementById(formId);
	const statusBlock = document.createElement("div");
	const loadText = "loading...";
	const errorText = "Some Error...";
	const successText = "THX! massager worcs...";
	const formErrors = "form data is not walid";

	//валидация данных
	const inputName = document.querySelectorAll('[name="user_name"]');
	// Валидация телефона
	const inputPhone = document.querySelectorAll('[name="user_phone"]');
	// Валидация инпута с текстом(Ваше сообщение)
	const inputMessage = document.getElementById("form2-message");

	const validate = (list) => {
		let success = true;
		//валидация данных
		// Проверка ввода в поля inputPhone
		const phoneRegex = /^(\+)?[0-9()+-]*$/;
		inputPhone.forEach((input) => {
			if (!phoneRegex.test(input.value)) {
				input.style.border = "3px solid red";
				success = false;
				setTimeout(function () {
					input.style.border = ""; // Сброс стилей бордера через 5 секунд
				}, 5000);
			}
		});
		// Проверка ввода в поля inputName
		const nameRegex = /^[а-яА-Я\s]*$/;
		inputName.forEach((input) => {
			if (!nameRegex.test(input.value)) {
				input.style.border = "3px solid red";
				success = false;
				setTimeout(function () {
					input.style.border = ""; // Сброс стилей бордера через 5 секунд
				}, 5000);
			}
		});
		// Проверка ввода в поле inputMessage
		const messageRegex = /^[а-яА-Я\s0-9.,!?]*$/;
		if (!messageRegex.test(inputMessage.value)) {
			input.style.border = "3px solid red";
			success = false;
			setTimeout(function () {
				input.style.border = ""; // Сброс стилей бордера через 5 секунд
			}, 5000);
		}

		return success;
	};

	const sendData = (data) => {
		return fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => res.json());
	};
	const submitForm = () => {
		const formElements = form.querySelectorAll("input");
		const formData = new FormData(form);
		const formBody = {};
		statusBlock.style.color = "white";
		statusBlock.textContent = loadText;
		form.append(statusBlock);
		formData.forEach((val, key) => {
			formBody[key] = val;
		});
		sumeElem.forEach((elem) => {
			const element = document.getElementById(elem.id);
			if (elem.type === "block") {
				formBody[elem.id] = element.textContent;
			} else if (elem.type === "input") {
				formBody[elem.id] = element.value;
			}
		});
		if (validate(formElements)) {
			sendData(formBody)
				.then((data) => {
					statusBlock.style.color = "white";
					statusBlock.textContent = successText;
					//чистим содержимое инпутов
					formElements.forEach((input) => {
						input.value = "";
					});
					setTimeout(function () {
						statusBlock.style.color = ""; // Сброс цвета текста через 5 секунд
						statusBlock.textContent = ""; // Очистка содержимого через 5 секунд
					}, 5000);
				})
				.catch((error) => {
					statusBlock.style.color = "white";
					statusBlock.textContent = errorText;
					setTimeout(function () {
						statusBlock.style.color = ""; // Сброс цвета текста через 5 секунд
						statusBlock.textContent = ""; // Очистка содержимого через 5 секунд
						//чистим содержимое инпутов
						formElements.forEach((input) => {
							input.value = "";
						});
					}, 5000);
				});
		} else {
			statusBlock.style.color = "red";
			statusBlock.textContent = formErrors; // выводим текст об ошибке формы
			setTimeout(function () {
				statusBlock.style.color = ""; // Сброс цвета текста через 5 секунд
				statusBlock.textContent = ""; // Очистка содержимого через 5 секунд
				//чистим содержимое инпутов
				formElements.forEach((input) => {
					input.value = "";
				});
			}, 5000);
			/* alert("Data is not valide"); */
		}
	};
	try {
		if (!form) {
			throw new Error("get form back!");
		}
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			submitForm();
		});
	} catch (error) {
		console.log(error.message);
	}
};

export default sendForm;
