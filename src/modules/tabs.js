"use strict";

const tabs = () => {
	const tabPanel = document.querySelector(".service-header");
	const tabs = document.querySelectorAll(".service-header-tab");
	const TabContent = document.querySelectorAll(".service-tab");

	tabPanel.addEventListener("click", (e) => {
		if (e.target.closest(".service-header-tab")) {
			const tabBtn = e.target.closest(".service-header-tab");
			console.log(tabBtn);
			tabs.forEach((tab, index) => {
				if (tab === tabBtn) {
					tab.classList.add("active");
					TabContent[index].classList.remove("d-none");
				} else {
					tab.classList.remove("active");
					TabContent[index].classList.add("d-none");
				}
			});
		}
	});
};

export default tabs;
