"use strict";

import timer from "./modules/timer";

import modal from "./modules/modal";

import menu from "./modules/menu";

import validation from "./modules/validation";

import tabs from "./modules/tabs";

import slider from "./modules/slider";

import calc from "./modules/calc";

import sendForm from "./modules/sendform";

timer("6 March 2024");
menu();
modal();
validation();
tabs();
slider();
calc(100);
sendForm({
	formId: "form1",
	sumeElem: [
		{
			type: "block",
			id: "total",
		},
	],
});
sendForm({
	formId: "form2",
	sumeElem: [],
});
sendForm({
	formId: "form3",
	sumeElem: [],
});
