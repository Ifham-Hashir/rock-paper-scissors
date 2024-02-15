let computerChoice = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let result = "";

document.querySelector("button").style.visibility="hidden";
let winner = document.querySelector("#winner");
// winner.style.visibility="hidden";
start();
document.querySelector("button").addEventListener("click", () => {
  location.reload();
})

function start () {
  const btnr = document.querySelector("#buttonR")
  btnr.addEventListener("click", () => {
    if(computerScore === 5 || playerScore === 5){
      btnr.disabled = true;
      announceWinner();
      document.querySelector("button").style.visibility="visible";
    }
    else{
      playerSelection = "ROCK";
      computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      score();
    }
  });

  const btnp = document.querySelector('#buttonP');
  btnp.addEventListener("click", () => {
    if(computerScore === 5 || playerScore === 5){
      btnp.disabled = true;
      announceWinner();
      document.querySelector("button").style.visibility="visible";
    }
    else{
      playerSelection = "PAPER";
      computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      score();
    }
  });

  const btns = document.querySelector('#buttonS');
  btns.addEventListener("click", () => {
    if(computerScore === 5 || playerScore === 5){
      btns.disabled = true;
      announceWinner();
      document.querySelector("button").style.visibility="visible";
    }
    else{
      playerSelection = "SCISSORS";
      computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      score();
    }
  });


  function getComputerChoice() {
    let randChoice = Math.floor(Math.random()*computerChoice.length);
    return computerChoice[randChoice];
  }


  function playRound(playerSelection, computerSelection){
    let printResult = document.querySelector('.result');
    printResult.textContent = `YOU CHOSE: ${playerSelection} <==> COMPUTER CHOSE: ${computerSelection}`
    if (playerSelection === computerSelection){
      result =  "Draw";
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
      result = `${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
      result = `${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
      result = `${computerSelection} beats ${playerSelection}`;
    }
    else {
      result = `${playerSelection} beats ${computerSelection}`;
    }
    let printResult2 = document.querySelector('.result2');
    printResult2.textContent = result;
  }

  function score() {
    if (result === `${computerSelection} beats ${playerSelection}`) {
      computerScore++;
    }
    else if (result === `${playerSelection} beats ${computerSelection}`) {
      playerScore++;
    }
    let printScore = document.querySelector(".currentScore");
    printScore.textContent = `CURRENT SCORE: YOU: 0${playerScore} <==> COMPUTER: 0${computerScore}`;
  }

  function announceWinner(){
    if(computerScore === 5){
      winner.textContent = "COMPUTER WON THE GAME!🤖";
    }
    else {
      winner.textContent = "YOU WON THE GAME!🥳"
    }
  }

}



