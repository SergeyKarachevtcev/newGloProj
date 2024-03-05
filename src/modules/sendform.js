"use strict";
const sendForm = ({ formId, sumeElem = [] }) => {
	const form = document.getElementById(formId);
	const statusBlock = document.createElement("div");
	const loadText = "loading...";
	const errorText = "Some Error...";
	const successText = "THX! massager worcs...";

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
		const phoneRegex = /^[0-9()+-]*$/;
		inputPhone.forEach((input) => {
			if (!phoneRegex.test(input.value)) {
				success = false;
			}
		});
		// Проверка ввода в поля inputName
		const nameRegex = /^[а-яА-Я\s]*$/;
		inputName.forEach((input) => {
			if (!nameRegex.test(input.value)) {
				success = false;
			}
		});
		// Проверка ввода в поле inputMessage
		const messageRegex = /^[а-яА-Я0-9\s.,!?]*$/;
		if (!messageRegex.test(inputMessage.value)) {
			success = false;
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
			console.log(element);
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
					formElements.forEach((input) => {
						input.value = "";
					});
				})
				.catch((error) => {
					statusBlock.style.color = "white";
					statusBlock.textContent = errorText;
				});
		} else {
			alert("Data is not valide");
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
