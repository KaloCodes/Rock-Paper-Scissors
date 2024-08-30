const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice; 
}


function getHumanChoice() {
    let validatedInput = false;

    while(validatedInput == false) {
        const humanChoice = prompt("Rock Paper Scissors?");

        if(humanChoice == null) {
            continue;
        }

        const humanChoiceInLowerCase = humanChoice.toLowerCase();

        if(choices.includes(humanChoiceInLowerCase)) {
            validatedInput = true;
            return humanChoiceInLowerCase;
        }
    }
}


let humanScore = 0;
let computerScore = 0;

function checkWinner(humanChoice, computerChoice) {
    
    if(humanChoice == computerChoice) {
        return "Tie";
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        return "human";
    }

    else {
        return "computer";
    }
   

}

function playRound(humanChoice, computerChoice) {
    const result = checkWinner(humanChoice, computerChoice);

    if(result == "Tie") {
        return "It's a TIE!";
    }
    else if(result == "human") {
        humanScore++;
        return `You WIN! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        return `You LOSE! ${computerChoice} beats ${humanChoice}`; 
    }

}

function playGame() {
    console.log("WELCOME TO ROCK-PAPER-SCISSORS!");

    for(let i = 1; i <= 5; i++ ) {
        console.log(`ROUND ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    console.log("GAME OVER!!!!");

    if(humanScore > computerScore) {
        console.log(`You are the WINNNER! You scored ${humanScore} points`);
    }
    else if(humanScore < computerScore) {
        console.log(`Computer WINS! It scored ${computerScore} points`);
    }
    else {
        console.log("The game ended in a TIE!");
    }
    
}

playGame();