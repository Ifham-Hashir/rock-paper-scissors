let computerChoice = ["ROCK", "PAPER", "SCISSORS"];


function getComputerChoice() {
  randChoice = Math.floor(Math.random()*computerChoice.length);
  return computerChoice[randChoice];
}

let userInput = prompt("Enter Rock, Paper or Scissor.");
userInput = userInput.toUpperCase();

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    return "Match Draw";
  }
  else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
    return "Computer Won!";
  }
  else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
    return "Computer Won!";
  }
  else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
    return "Computer Won!";
  }
  else {
    return "Player Won!!!";
  }
}

console.log(playRound(userInput, getComputerChoice()));