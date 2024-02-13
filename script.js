let computerChoice = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let result = "";

function getComputerChoice() {
  randChoice = Math.floor(Math.random()*computerChoice.length);
  return computerChoice[randChoice];
}

function getPlayerChoice(){
  let playerInput = prompt("Enter Rock, Paper or Scissor.");
  playerInput = userInput.toUpperCase();
  return playerInput;
}

function playRound(playerSelection, computerSelection){
  console.log(`Computer: ${computerSelection} Player: ${playerSelection}`)
  if (playerSelection === computerSelection){
    result =  "Draw";
  }
  else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
    result = "Computer Won!";
  }
  else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
    result = "Computer Won!";
  }
  else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
    result = "Computer Won!";
  }
  else {
    result = "Player Won!";
  }
  return result;
}

function score() {
  if (result === "Computer Won!") {
    computerScore += 1;
  }
  else if (result === "Player Won!") {
    playerScore += 1;
  }
  console.log(`Score: Computer:${computerScore} Player:${playerScore}`)
}

function playGame() {
  for(let i = 1; i <= 5; i++){
    console.log(`Round: ${i}`)
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    score();
  }
  if(computerScore > playerScore){
    console.log("Computer won the game!")
  }
  else if(computerScore < playerScore){
    console.log("Player won the game!")
  }
  else{
    console.log("Game Draw")
  }

}

playGame();

