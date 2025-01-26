

const startPage = document.querySelector("div");
const webOutput = document.createElement("div");


let computerScore = 0;
let humanScore = 0;
const playRock = document.getElementById("rock");
const playPaper = document.getElementById("paper");
const playScissors = document.getElementById("scissors");

playRock.onclick = (event) => {
    playRound(playRock.value,getComputerChoice());
}
playPaper.onclick = (event) => {       
    playRound(playPaper.value, getComputerChoice());
}
playScissors.onclick = (event) => {
playRound(playScissors.value, getComputerChoice());
}


function playRound(humanChoice, computerChoice) {

    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice == computerChoice) {
        webOutput.innerText = "Player chooses " + humanChoice + "." + "\nComputer chooses " + computerChoice + ".\nIt's a tie!";
    }
    else {
        switch(humanChoice) {
            case("Rock"):
            if(computerChoice == "Scissors") {
                webOutput.innerText = "Player chooses " + humanChoice + "." + "\nComputer chooses " + computerChoice + ".\nPlayer scores!";
                humanScore++;
            }
            else {
                webOutput.innerText = "Player chooses " + humanChoice + "." + "\nComputer chooses " + computerChoice + ".\nComputer scores!";
                computerScore++;
            }
            break;
            case("Paper"):
            if(computerChoice == "Rock") {
                webOutput.innerText = "Player chooses " + humanChoice + "." + "\nComputer chooses " + computerChoice + ".\nPlayer scores!";
                humanScore++;
            }
            else {
                webOutput.innerText = "Player chooses " + humanChoice + "." + "\nComputer chooses " + computerChoice + ".\nComputer scores!";
                computerScore++;
            }
            break;
            case("Scissors"):
            if(computerChoice == "Paper") {
                webOutput.innerText = "Player chooses " + humanChoice + "." + "\nComputer chooses " + computerChoice + ".\nPlayer scores!";
                humanScore++;
            }
            else {
                webOutput.innerText = "Player chooses " + humanChoice + "." + "\nComputer chooses " + computerChoice + ".\nComputer scores!";
                computerScore++;
            }
            break;
        }
        if(humanScore > 4) {
            webOutput.innerText = "Player now has 5 points. Player wins!\nPress a button to play again"
            humanScore = 0;
            computerScore = 0;
        }
        if(computerScore > 4) {
            webOutput.innerText = "Computer now has 5 points. Computer wins!\nPress a button to play again"
            humanScore = 0;
            computerScore = 0;
        }
        console.log(humanScore);
        console.log(computerScore);
    }
    startPage.appendChild(webOutput);
}


function getComputerChoice(computerRPS) {

    let randomResult = Math.floor(Math.random() * 3);

    switch(randomResult) {
        case 0:
            computerRPS = "Rock";
            break;
        case 1:
            computerRPS = "Paper";
            break;
        case 2:
            computerRPS = "Scissors";
            break;
    }
    return computerRPS;
}




/*
function playGame() {
    let ctr = 5;
    while(ctr > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();        
        playRound(humanSelection, computerSelection);
        ctr--;;
        }
    }
playGame();  */
/*
const playRock  = document.getElementById("rock");
const playPaper = document.getElementById("paper");
const playScissors = document.getElementById("scissors"); */


/*function getHumanChoice(humanRPS) {
    humanRPS = prompt("Rock, Paper, Scissors").toLowerCase();
    let capitalize = humanRPS.charAt(0).toUpperCase();
    let humanOutput = capitalize+humanRPS.slice(1);
    if(humanOutput == "Scissor")
        humanOutput = "Scissors";
    if(humanOutput == "Rock" || humanOutput == "Paper" || humanOutput == "Scissors") {
        return humanOutput;
    }
    else
    console.log("Wrong Input!") 
}*/