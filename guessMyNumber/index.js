"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

function handleClick() {
	const guess = Number(document.querySelector(".guess").value);
	if (!guess) {
		document.querySelector(".message").textContent =
			"⛔️ Please enter a number to start .";
	} else if (guess === secretNumber) {
		document.querySelector(".message").textContent = "✅ Bingo .";
	} else if (guess > secretNumber) {
		document.querySelector(".message").textContent = "⛔️ Guess is too high .";
		score--;
	} else if (guess < secretNumber) {
		document.querySelector(".message").textContent = "⛔️ Guess is too low .";
		score--;
	}
	if (score <= 0) {
		score = 0;
		document.querySelector(".message").textContent = "⛔️ Game over .";
	}
	document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", handleClick);
