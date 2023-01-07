let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const Options = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    return computerSelection = Options[Math.floor(Math.random()*3)];
}

function playRound() {
    getComputerChoice();
    
    if ((playerSelection == "ROCK" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "PAPER")) {        
        return `The results is a draw. You both selected ${playerSelection.toLowerCase()}. The score remains Player: ${playerScore}, Computer: ${computerScore}`;
    } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "ROCK")) {
        playerScore++;
        return `The player wins! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}. The score is now Player: ${playerScore}, Computer: ${computerScore}`;
    } else if ((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "SCISSORS" && computerSelection == "ROCK") || (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
        computerScore++;
        return `The computer wins! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}. The score is now Player: ${playerScore}, Computer: ${computerScore}`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please choose between rock, paper or scissors").toUpperCase();
        getComputerChoice();
        console.log(playRound());
    }
    if (playerScore > computerScore) {
        return `The player wins with a score of ${playerScore} to ${computerScore}`
    } else if (playerScore < computerScore) {
        return `The computer wins with a score of ${computerScore} to ${playerScore}`
    } else {
        return `The computer and player draw at a score of ${computerScore}`
    }

}

console.log(playGame());