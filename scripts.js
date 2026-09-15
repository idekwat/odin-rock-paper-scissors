const mainDiv = document.querySelector(".container");

const scoreboard = document.querySelector("#round-result");
const humanScore = document.querySelector("#human-score")
const computerScore = document.querySelector("#computer-score")

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");

scoreboard.textContent = "Score";

let currentHumanScore = 0;
let currentComputerScore = 0;

computerScore.textContent = 0;
humanScore.textContent = 0;


rockButton.addEventListener("click", () => {
    playGame(rockButton.value);
})
paperButton.addEventListener("click", () => {
    playGame(paperButton.value);
})
scissorButton.addEventListener("click", () => {
    playGame(scissorButton.value);
})

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if(randomNum <1) computerChoice = "Rock";
    else if (randomNum >1) computerChoice = "Paper";
    else computerChoice = "Scissors";
    return computerChoice;
}

function playGame(human) {

    computerScore.textContent = currentComputerScore;
    humanScore.textContent = currentHumanScore;

    function playRound(human, computer) {
        if(human == "Rock" && computer == "Paper" ||
            human == "Paper" && computer == "Scissors" ||
            human == "Scissors" && computer == "Rock") {
            console.log(`You lose! ${computer} beats ${human}`);  
            currentComputerScore++;
            computerScore.textContent = currentComputerScore;
        }else if(human == computer) {
            console.log(`It's a tie! You have both chosen ${computer}`);
        }
        else {
            console.log(`You win! ${human} beats ${computer}`)
            currentHumanScore++;
            humanScore.textContent = currentHumanScore;
        }
    }
    if(currentHumanScore < 5 || currentComputerScore < 5) {
        playRound(human, getComputerChoice());
        
        if(currentComputerScore >= 5) {
            scoreboard.textContent = "You Lose! Click a button to play again";
            currentComputerScore = 0;
            currentHumanScore = 0;
        }

        else if(currentHumanScore >= 5) {
            scoreboard.textContent = "You Win! Click a button to play again";            
            currentComputerScore = 0;
            currentHumanScore = 0;
        }
    }
}
