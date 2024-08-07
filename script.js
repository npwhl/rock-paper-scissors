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
const score = document.querySelector("h3");
score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;

function playRound(humanChoice, computerChoice) {
    const result = document.createElement("p");
    if(humanChoice === computerChoice) {
        result.textContent = `You drew! The computer also played ${humanChoice}.`;
        results.appendChild(result);
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
    score.textContent = `You: ${humanScore}, Computer: ${computerScore}`; // Refresh
    results.appendChild(result);
    winCheck();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className, getComputerChoice());
    });
});

function winCheck() {
    if(humanScore === 5 || computerScore === 5) {
        const winner = document.createElement("h3");
        humanScore > computerScore ? winner.textContent = "You beat the computer!"
            : winner.textContent  = "You lost to the computer!";
        results.appendChild(winner);
        buttons.forEach((button) => {
            button.disabled = "true";
        })
    }
}