const player1Text = document.getElementById("payer1-text");
const player2Text = document.getElementById("payer2-text");
const resultText = document.getElementById("result-text");
const choiceBtns = document.querySelectorAll(".choice-btn");
let player1, player2, result;
choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player1 = button.textContent;
    player2Turn();
    player1Text.textContent = `Player1: ${player1}`;
    player2Text.textContent = `Player2: ${player2}`;
    resultText.textContent = checkWinner();
  })
);
function player2Turn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      player2 = "ROCK";
      break;
    case 2:
      player2 = "PAPER";
      break;
    case 1:
      player2 = "SCISSORS";
      break;
  }
}
function checkWinner() {
  if (player1 == player2) {
    return "Draw!";
  } else if (player2 == "ROCK") {
    return player1 == "SCISSORS" ? "You win!" : "You Lose";
  } else if (player2 == "PAPER") {
    return player1 == "SCISSORS" ? "You win!" : "You Lose";
  } else if (player2 == "SCISSORS") {
    return player1 == "ROCK" ? "You win!" : "You Lose";
  }
}
