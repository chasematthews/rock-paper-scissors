// Defining the variables used for the rock paper scissors

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

// Read in the content from the HTML file

const buttons = document.querySelectorAll("button");
const computerDisplay = document.querySelector("#computer-score");
const playerDisplay = document.querySelector("#player-score");
const gameDescription = document.querySelector("h2");
const body = document.querySelector("body");

// Computers options for rock paper scissors

const Options = ["ROCK", "PAPER", "SCISSORS"];

// Computer function

function getComputerChoice() {
    return computerSelection = Options[Math.floor(Math.random()*3)];
}

// Round of rock paper scissors function

function playRound() {
    getComputerChoice();
    
    if ((playerSelection == "ROCK" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "PAPER")) {        
        return gameDescription.textContent = `The results is a draw. You both selected ${playerSelection.toLowerCase()}.`;
    } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "ROCK")) {
        playerScore++;
        playerDisplay.textContent = `${playerScore}`;
        return gameDescription.textContent = `The player wins! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}.`;
    } else if ((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "SCISSORS" && computerSelection == "ROCK") || (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
        computerScore++;
        computerDisplay.textContent = `${computerScore}`;
        return gameDescription.textContent = `The computer wins! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}.`;
    }
}

// Add some style to the buttons when they are hovered over

buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hoverover');
        button.addEventListener('mouseout', () => {
            button.classList.remove('hoverover');
        });
    });
});

// Select the PlayerSelection when the button is clicked.

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case "btn-rock":
                playerSelection = "ROCK";
                break;
            case "btn-scissors":
                playerSelection = "SCISSORS";
                break;
            case "btn-paper":
                playerSelection = "PAPER";
                break;
        }
        playRound();
        if (playerScore == 5) {
            const finalScore = document.createElement('div');
            finalScore.classList.add('h2');
            finalScore.textContent = `The player wins with a score of ${playerScore} to ${computerScore}`;
            body.appendChild(finalScore);
        } else if (computerScore == 5) {
            const finalScore = document.createElement('div');
            finalScore.classList.add('h2');
            finalScore.textContent = `The computer wins with a score of ${computerScore} to ${playerScore}`;    
            body.appendChild(finalScore);
        }
    })
})