var humanScore = 0;
var computerScore = 0;
var roundNumber = 0;

const choiceButton = document.querySelector("#choiceButton");
choiceButton.addEventListener("click", getHumanChoice);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let choice = document.querySelector("#rpsChoice").value;
  console.log(choice);
}
