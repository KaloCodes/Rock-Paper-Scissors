let userScore = 0;
let computerScore = 0;
const userScore_Span = document.querySelector("#user-score");
const computerScore_Span = document.querySelector("#computer-score");
const result = document.querySelector(".result > p");
const choices = document.querySelector(".choices");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const winnerDisplay = document.querySelector(".winner-display");
const gameRound = document.querySelector(".game-round-display > h3");


function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}


function userWins(userChoice, computerChoice) {
    userScore++;
    userScore_Span.innerHTML = userScore;
    computerScore_Span.innerHTML = computerScore;
    result.innerHTML = `${userChoice}(user) beats ${computerChoice}(computer). You WIN!`;
};

function userLoses(userChoice, computerChoice) {
    computerScore++;
    userScore_Span.innerHTML = userScore;
    computerScore_Span.innerHTML = computerScore;
    result.innerHTML = `${computerChoice}(computer) beats ${userChoice}(user). You LOSE!`;
};

function userComputerTie(userChoice, computerChoice) {
    result.innerHTML = `${userChoice}(user) is equal to ${computerChoice}(computer). It's a TIE!`;
}


function playGame(userChoice) {
    let computerChoice = getComputerChoice();
    
    switch(userChoice + computerChoice) {
        // user wins when:
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            userWins(userChoice, computerChoice);
            break;

        // user loses when:
        case "rockpaper":
        case "paperscissprs":
        case "scissorsrock":
            userLoses(userChoice, computerChoice);
            break;
        
        // Tie
        default: 
           userComputerTie(userChoice, computerChoice);
           break;
    }

};

let round = 0;
function playRound() {
    choices.addEventListener("click", (event) => {
        let targetElement = event.target;
        if(round < 5) {   

            switch(targetElement.className) {
                case "rock":
                    playGame("rock");
                    break;
                            
                case "paper":
                    playGame("paper");
                    break;
                            
                case "scissors":
                    playGame("scissors");
                    break;
            };

            round++;
            gameRound.innerHTML = `Round ${round}`;
        }
        
        if(round == 5) {
            let userFinalScore = userScore_Span.innerHTML;
            let computerFinalScore = computerScore_Span.innerHTML;

            if(userFinalScore > computerFinalScore) {
            winnerDisplay.innerHTML = "Congratulations!. You WIN!";
            }

            else if(userFinalScore < computerFinalScore) {
            winnerDisplay.innerHTML = "Nice Try!. You LOSE!";
            }
            else {
            winnerDisplay.innerHTML = "It's a TIE!";
            }
        }
        
    });     
    
};

playRound();



