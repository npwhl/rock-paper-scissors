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

const results = document.querySelector("div");

function playRound(humanChoice, computerChoice) {
    const result = document.createElement("p");
    if(!humanChoice) {
        result.textContent = "You made an invalid move, so the computer wins by default.";
        computerScore++;
        return;
    }
    if(humanChoice === computerChoice) {
        result.textContent = `You drew! The computer also played ${humanChoice}.`;
        return;
    }

    let win = humanChoice === "Paper" && computerChoice === "Rock" ? "win" 
        : humanChoice === "Rock" && computerChoice === "Scissors" ? "win"
        : humanChoice === "Scissors" && computerChoice === "Paper" ? "win" 
        : "";

    if(win) {
        result.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        result.textContent = `You lost! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    results.appendChild(result);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className, getComputerChoice());
    });
});

const score = document.querySelector("h2");
h2.textContent = "You: 0, Computer: 0"


// function playGame() {
//     for(let gameCount = 0; gameCount < 5; gameCount++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     if(humanScore > computerScore) {
//         console.log("Winner: YOU!");
//     } else if(humanScore < computerScore) {
//         console.log("Winner: COMPUTER!");
//     } else {
//         console.log("Winner: DRAW.")
//     }
//     console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`)
// }
// playGame();