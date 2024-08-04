let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let selection = Math.round(Math.random()*3) + 1;
    return selection === 1 ? "rock" 
        : selection === 2 ? "paper"
        : "scissors";
}

function getHumanChoice() {
    let selection = prompt("Enter your move ('Rock', 'Paper', 'Scissors').")
    selection = selection.toUpperCase();
    return selection === "ROCK" ? "rock"
        : selection === "PAPER" ? "paper"
        : selection === "SCISSORS" ? "scissors"
        : "";
} 

function playRound(humanChoice, computerChoice) {
    if(!humanChoice) {
        console.log("You made an invalid move, so the computer wins by default.");
        computerScore++;
    }
    if(humanChoice === computerChoice) {
        console.log(`You drew! The computer also played ${humanChoice}`);
        return;
    }

    let win = humanChoice === "paper" && computerChoice === "rock" ? "win" 
        : humanChoice === "rock" && computerChoice === "scissors" ? "win"
        : humanChoice === "scissors" && computerChoice === "paper" ? "win" 
        : "";

    if(win) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`) 
        humanScore++;
    } else {
        console.log (`You lost! ${computerChoice} beats ${humanChoice}.`)
        computerScore++;
    }
}

function playGame() {
    for(let gameCount = 0; gameCount < 5; gameCount++) {
        playRound();
    }
    if(humanScore > computerScore) {
        console.log("Winner: YOU!");
    } else if(humanScore < computerScore) {
        console.log("Winner: COMPUTER!");
    } else {
        console.log("Winner: DRAW.")
    }
}

playGame();