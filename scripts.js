let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice;
const computerChoice = getComputerChoice;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if(randomNum <1) computerChoice = "Rock";
    else if (randomNum >1) computerChoice = "Paper";
    else computerChoice = "Scissors";
    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, Scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceFormat = humanChoice(0).toUpperCase + humanChoice.slice(1).toLowerCase();
    if(humanChoiceFormat == "Rock" && computerChoice == "Paper" ||
        humanChoiceFormat == "Paper" && computerChoice == "Scissors" ||
        humanChoiceFormat == "Scissors" && computerChoice == "Rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoiceFormat}`);
        computerScore++;
    }else if(humanChoiceFormat == computerChoice) {
        console.log(`It's a tie! You have both chosen ${humanChoiceFormat}`);
    }
    else {
        console.log(`You win! ${humanChoiceFormat} beats ${computerChoice}`)
        humanScore++;
    }
}

function playGame() {
    playRound(getHumanChoice, getComputerChoice);
    playRound(getHumanChoice, getComputerChoice);
    playRound(getHumanChoice, getComputerChoice);
    playRound(getHumanChoice, getComputerChoice);
    playRound(getHumanChoice, getComputerChoice);
}
