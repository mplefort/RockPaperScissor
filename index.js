

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    choices.slice
    let comp_choice = choices[Math.floor(Math.random() * choices.length)];
    return comp_choice;
}


function playGame(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie!";
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return "You lose! Paper beats Rock";
        }
        else {
            return "You win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return "You win! Paper beats Rock";
        }
        else {
            return "You lose! Scissor beats Paper";
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            return "You lose! Rock beats Scissors";
        }
        else {
            return "You win! Scissors beats Paper";
        }
    }
    else {
        return "Invalid input";
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection){
    let comp_choice = getComputerChoice();
    let result = playGame(playerSelection, comp_choice)
    let result_dom = document.querySelector(".result-box")

    result_dom.textContent = result;

    let player1 = document.querySelector(".player1")
    player1.children[0].className = "player-box fa-solid fa-hand-" + playerSelection

    let player2 = document.querySelector(".player2")
    player2.children[0].className = "player-box fa-solid fa-hand-" + comp_choice


    if (result.includes("win")){
        playerScore++;
    } else if (result.includes("lose")){
        computerScore++;
    }

    document.querySelector(".player1-score").textContent = playerScore;
    document.querySelector(".player2-score").textContent = computerScore;

    if (playerScore === 5){
        result_dom.textContent = "You won the game!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5){
        result_dom.textContent = "You lost the game!";
        playerScore = 0;
        computerScore = 0;
    }
}



document.querySelector(".rock-box").addEventListener("click", function(){
    playRound("rock");
});

document.querySelector(".paper-box").addEventListener("click", function(){
    playRound("paper");

});

document.querySelector(".scissors-box").addEventListener("click", function(){
    playRound("scissors");
});