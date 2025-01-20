
console.log("Hello Wold")

let computerScore = 0;
let humanScore = 0;

function playGame() {
    let ctr = 5;
    while(ctr > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();        
        playRound(humanSelection, computerSelection);
        ctr--;;
        }
    }
playGame();

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice == computerChoice) {
        console.log(humanChoice + " vs " + computerChoice + ". It's a tie!")
    }
    else {
        switch(humanChoice) {
            case("Rock"):
            if(computerChoice == "Scissors") {
                console.log(humanChoice + " beats " + computerChoice + ". Player wins!")
                humanScore++;
            }
            else {
                console.log(computerChoice + " beats " + humanChoice + ". Computer wins!")
                computerScore++;
            }
            break;
            case("Paper"):
            if(computerChoice == "Rock") {
                console.log(humanChoice + " beats " + computerChoice + ". Player wins!")
                humanScore++;
            }
            else {
                console.log(computerChoice + " beats " + humanChoice + ". Computer wins!")
                computerScore++;
            }
            break;
            case("Scissors"):
            if(computerChoice == "Paper") {
                console.log(humanChoice + " beats " + computerChoice + ". Player wins!")
                humanScore++;
            }
            else {
                console.log(computerChoice + " beats " + humanChoice + ". Computer wins!")
                computerScore++;
            }
            break;
        }
    }
    console.log("Player score: " + humanScore);
    console.log("Computer score: " + computerScore);
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

function getHumanChoice(humanRPS) {
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
}