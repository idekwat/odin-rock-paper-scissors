
console.log("Hello Wold")

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

console.log(getComputerChoice(""))


