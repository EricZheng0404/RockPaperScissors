function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice(i) {
  let choice;
  do {
    choice = prompt(`Round ${i}: Enter your choice (Rock, Paper, or Scissors)`);
    if (choice === null) return null; // User cancelled
    choice = choice.toUpperCase();
  } while (!["ROCK", "PAPER", "SCISSORS"].includes(choice));
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Round result: Tie! Both chose ${humanChoice}`);
    return "tie";
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore += 1;
    console.log(
      `Round result: You win! ${humanChoice} beats ${computerChoice}`
    );
    return "human";
  } else {
    computerScore += 1;
    console.log(
      `Round result: Computer wins! ${computerChoice} beats ${humanChoice}`
    );
    return "computer";
  }
}

function playGame() {
  console.log("🎮 Welcome to Rock Paper Scissors!");
  console.log("Best of 5 rounds - let's play!");

  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice(i);
    if (humanChoice === null) {
      console.log("Game cancelled!");
      return;
    }

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: You ${humanScore} - ${computerScore} Computer\n`);
  }

  // Announce winner
  console.log("🏆 FINAL RESULTS:");
  console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);

  if (humanScore > computerScore) {
    console.log("🎉 Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😔 Computer wins! Better luck next time!");
  } else {
    console.log("🤝 It's a tie! Great game!");
  }
}

playGame();
