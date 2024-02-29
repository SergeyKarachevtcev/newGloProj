"use strict";

const getUrl = "db.json";
const sendUrl = "https://jsonplaceholder.typicode.com/posts";

// Функция получения данных
const getData = (url) => {
	return fetch(url).then((response) => response.json());
};

// Получаем данные из файла db.json
getData(getUrl)
	.then((data) => {
		// Используем полученные данные
		console.log(data);
	})
	.catch((error) => {
		// Обрабатываем любые ошибки, возникающие во время
		console.error("Error:", error);
	});

//функция отправки данных
const sendData = (url, data) => {
	return fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}).then((response) => response.json());
};

// Получаем данные из файла db.json
getData(getUrl)
	.then((data) => {
		// Используем полученные данные
		console.log(data);
		// Отправляем данные на сервер
		sendData(sendUrl, data)
			.then((response) => {
				// Обрабатываем ответ от сервера
				console.log(response);
			})
			.catch((error) => {
				// Обрабатываем ошибки отправки данных
				console.error("Error:", error);
			});
	})
	.catch((error) => {
		// Обрабатываем любые ошибки, возникающие во время получения данных
		console.error("Error:", error);
	});
