function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore += 1;
    return "human";
  } else {
    computerScore += 1;
    return "computer";
  }
}

function updateDisplay(humanChoice, computerChoice, result) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>You chose: ${humanChoice}</p>
    <p>Computer chose: ${computerChoice}</p>
    <p>Winner: ${result}</p>
    <p><strong>Score - You: ${humanScore} Computer: ${computerScore}</strong></p>
  `;

  if (humanScore >= 5 || computerScore >= 5) {
    const winner =
      humanScore >= 5 ? "You win the game!" : "Computer wins the game!";
    resultDiv.innerHTML += `<h2>${winner}</h2>`;
    resultDiv.innerHTML += `<button id="reset">Reset</button>`;
  }

  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    resultDiv.innerHTML = "";
  });
}

function handleChoice(humanChoice) {
  if (humanScore >= 5 || computerScore >= 5) {
    return; // Game is over
  }

  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);
  updateDisplay(humanChoice, computerChoice, result);
}

// Set up event listeners when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const paperButton = document.getElementById("Paper");
  const scissorsButton = document.getElementById("Scissors");
  const rockButton = document.getElementById("Rock");

  paperButton.addEventListener("click", () => {
    handleChoice("PAPER");
  });

  scissorsButton.addEventListener("click", () => {
    handleChoice("SCISSORS");
  });

  rockButton.addEventListener("click", () => {
    handleChoice("ROCK");
  });
});
