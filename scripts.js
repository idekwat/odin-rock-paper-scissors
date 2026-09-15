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
    let formatChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    return formatChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    function playRound(human, computer) {
        if(human == "Rock" && computer == "Paper" ||
            human == "Paper" && computer == "Scissors" ||
            human == "Scissors" && computer == "Rock") {
            console.log(`You lose! ${computer} beats ${human}`);  
            computerScore++;
            rounds++;
        }else if(human == computer) {
            console.log(`It's a tie! You have both chosen ${computer}`);
            rounds++;
        }
        else {
            console.log(`You win! ${human} beats ${computer}`)
            humanScore++;
            rounds++;
        }
    }
    while(rounds < 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(rounds = 5) {
        console.log(`After ${rounds} rounds.`)
        if(humanScore > computerScore) console.log(`With a score of ${humanScore} - ${computerScore}. You win!`);
        else if(humanScore == computerScore) console.log(`With a score of ${humanScore} - ${computerScore}. It's a tie!`);
        else console.log(`With a score of ${humanScore} - ${computerScore}. You lose!`);
    }
}

playGame();