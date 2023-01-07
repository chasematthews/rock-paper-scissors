let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const Options = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    return computerSelection = Options[Math.floor(Math.random()*3)];
}

playerSelection = prompt("Please choose between rock, paper or scissors").toUpperCase();

function playRound() {
    getComputerChoice();
    
    if ((playerSelection == "ROCK" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "PAPER")
     ) {        
        return `The results is a draw. You both selected ${playerSelection.toLowerCase()}. The score remains Player: ${playerScore}, Computer: ${computerScore}`
    }
    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "ROCK") 
    ) {
        playerScore++
        return `The player wins! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}. The score is now Player: ${playerScore}, Computer: ${computerScore}`
    }
    else if ((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "SCISSORS" && computerSelection == "ROCK") || (playerSelection == "PAPER" && computerSelection == "SCISSORS")
    ) {
        computerScore++
        return `The computer wins! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}. The score is now Player: ${playerScore}, Computer: ${computerScore}`
    }
}

console.log(playRound());