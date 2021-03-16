"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

function handleCheckClick() {
	const guess = Number(document.querySelector(".guess").value);
	if (!guess) {
		document.querySelector(".message").textContent =
			"⛔️ Please enter a number to start .";
	} else if (guess === secretNumber) {
		highestScore = score > highestScore ? score : highestScore;
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector(".highscore").textContent = highestScore;
		document.querySelector(".message").textContent = "✅ Bingo .";
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";
	} else if (guess !== secretNumber) {
		document.querySelector(".message").textContent = `⛔️ Guess is too ${
			guess > secretNumber ? "high" : "low"
		} .`;
		score--;
	}
	if (score <= 0) {
		score = 0;
		document.querySelector(".message").textContent = "⛔️ Game over .";
	}
	document.querySelector(".score").textContent = score;
}

function handleAgainClick() {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
}

document.querySelector(".check").addEventListener("click", handleCheckClick);
document.querySelector(".again").addEventListener("click", handleAgainClick);
