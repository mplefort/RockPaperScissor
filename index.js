

function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
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
            return "You win! Rock beats Scissor";
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
    else if (playerSelection === "scissor"){
        if (computerSelection === "rock"){
            return "You lose! Rock beats Scissor";
        }
        else {
            return "You win! Scissor beats Paper";
        }
    }
    else {
        return "Invalid input";
    }
}




document.querySelector(".rock-box").addEventListener("click", function(){
    let comp_choice = getComputerChoice();
    let result = playGame("rock", comp_choice)
    let result_dom = document.querySelector(".result-box")
    
    result_dom.textContent = result;
    
    let player1 = document.querySelector(".player1")
    player1.children[0].textContent = "Rock";

    let player2 = document.querySelector(".player2")
    player2.children[0].textContent = comp_choice.charAt(0).toUpperCase() + comp_choice.slice(1);

});

document.querySelector(".paper-box").addEventListener("click", function(){
    let comp_choice = getComputerChoice();
    let result = playGame("paper", comp_choice)
    let result_dom = document.querySelector(".result-box")
    
    result_dom.textContent = result;
    
    let player1 = document.querySelector(".player1")
    player1.children[0].textContent = "Paper";

    let player2 = document.querySelector(".player2")
    player2.children[0].textContent = comp_choice.charAt(0).toUpperCase() + comp_choice.slice(1);

});

document.querySelector(".scissors-box").addEventListener("click", function(){
    let comp_choice = getComputerChoice();
    let result = playGame("scissor", comp_choice)
    let result_dom = document.querySelector(".result-box")
    
    result_dom.textContent = result;
    
    let player1 = document.querySelector(".player1")
    player1.children[0].textContent = "Scissor";

    let player2 = document.querySelector(".player2")
    player2.children[0].textContent = comp_choice.charAt(0).toUpperCase() + comp_choice.slice(1);

});