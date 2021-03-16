const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function handleOpenClick() {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
}

function handleCloseClick() {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
}

function handleKeyDown(e) {
	e.key === "Escape" && !modal.classList.contains("hidden")
		? handleCloseClick()
		: null;
}

btnCloseModal.addEventListener("click", handleCloseClick);
overlay.addEventListener("click", handleCloseClick);
document.addEventListener("keydown", handleKeyDown);

for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener("click", handleOpenClick);
}
