
console.log("Hello Wold")

function getComputerChoice(computerRPS) {

    let randomResult = Math.floor(Math.random() * 3);
    switch(randomResult) {
        case 0:
            computerRPS = "rock";
            break;
        case 1:
            computerRPS = "paper";
            break;
        case 2:
            computerRPS = "scissors";
            break;
    }
    return computerRPS;
}

console.log(getComputerChoice(""))

function getHumanChoice(humanRPS) {
    humanRPS = prompt("Rock, Paper, Scissors");
    return humanRPS;
}

console.log(getHumanChoice(""))