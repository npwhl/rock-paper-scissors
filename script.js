let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let selection = Math.round(Math.random()*3) + 1;
    return selection === 1 ? "Rock" 
        : selection === 2 ? "Paper"
        : "Scissors";
}

function getHumanChoice() {
    let selection = prompt("Enter your move ('Rock', 'Paper', 'Scissors').")
    selection = selection.toUpperCase();
    return selection === "ROCK" ? "Rock"
        : selection === "PAPER" ? "Paper"
        : selection === "SCISSORS" ? "Scissors"
        : "";
} 

function playRound(humanChoice, computerChoice) {
    if(!humanChoice) {
        console.log("You made an invalid move, so the computer wins by default.");
        computerScore++;
        return;
    }
    if(humanChoice === computerChoice) {
        console.log(`You drew! The computer also played ${humanChoice}.`);
        return;
    }

    let win = humanChoice === "Paper" && computerChoice === "Rock" ? "win" 
        : humanChoice === "Rock" && computerChoice === "Scissors" ? "win"
        : humanChoice === "Scissors" && computerChoice === "Paper" ? "win" 
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
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > computerScore) {
        console.log("Winner: YOU!");
    } else if(humanScore < computerScore) {
        console.log("Winner: COMPUTER!");
    } else {
        console.log("Winner: DRAW.")
    }
    console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`)
}

playGame();