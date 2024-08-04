function getComputerChoice() {
    let selection = Math.round(Math.random()*3) + 1;
    return selection === 1 ? "rock" 
        : selection === 2 ? "paper"
        : "scissors";
}

console.log(getComputerChoice());