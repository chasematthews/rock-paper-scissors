// Defining the variables used for the rock paper scissors

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let computerEmoji = "";
let playerEmoji = ""

// Read in the content from the HTML file

const buttons = document.querySelectorAll("button");
const computerSelectionDisplay = document.getElementById("computer-selection-emoji")
const playerSelectionDisplay = document.getElementById("player-selection-emoji")
const computerDisplay = document.querySelector("#computer-score-number");
const playerDisplay = document.querySelector("#player-score-number");
const gameDescription = document.querySelector("h2");
const body = document.querySelector("body");

// Computers options for rock paper scissors

const Options = ["ROCK", "PAPER", "SCISSORS"];

// Select the PlayerSelection when the button is clicked.

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //Get player selection and specify the emoji
        getPlayerSelection(button)
        //Exectue the round logic
        playRound();
        //Execute the game state logic
        gameState();
    })
})

function getPlayerSelection(button) {
    switch (button.id) {
        case "btn-rock":
            playerSelection = "ROCK";
            playerEmoji = "\u270A"
            break;
        case "btn-scissors":
            playerSelection = "SCISSORS";
            playerEmoji = "\u270C"
            break;
        case "btn-paper":
            playerSelection = "PAPER";
            playerEmoji = "\u270B"
            break;
    }
}

// Round of rock paper scissors function

function playRound() {
    getComputerChoice();
    displaySelections();
    checkWinner();
}

// Computer function

function getComputerChoice() {
    computerSelection = Options[Math.floor(Math.random()*3)];
    getCompEmoji();
    return computerSelection;
}

// Get the computer emoji

function getCompEmoji() {
    switch (computerSelection) {
        case "ROCK":
            computerEmoji = "\u270A"     
            break
        case "SCISSORS":
            computerEmoji = "\u270C"
            break
        case "PAPER":
            computerEmoji = "\u270B"
            break
    };
}

// Displaye the selections on the DOM

function displaySelections() {
    playerSelectionDisplay.textContent = playerEmoji;
    computerSelectionDisplay.textContent = computerEmoji;
}

function gameState() {
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
}

function checkWinner() {
    if ((playerSelection == "ROCK" && computerSelection == "ROCK") || 
    (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") || 
    (playerSelection == "PAPER" && computerSelection == "PAPER")) {        
        return gameDescription.textContent = `The results is a draw. You both selected ${playerSelection.toLowerCase()}.`;
    } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
    (playerSelection == "SCISSORS" && computerSelection == "PAPER") || 
    (playerSelection == "PAPER" && computerSelection == "ROCK")) {
        playerScore++;
        playerDisplay.textContent = `${playerScore}`;
        return gameDescription.textContent = `The player wins! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}.`;
    } else if ((playerSelection == "ROCK" && computerSelection == "PAPER") || 
    (playerSelection == "SCISSORS" && computerSelection == "ROCK") || 
    (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
        computerScore++;
        computerDisplay.textContent = `${computerScore}`;
        return gameDescription.textContent = `The computer wins! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}.`;
    }
}
