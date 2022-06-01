const ROCK_IMG_URL = 'images/rock.png';
const PAPER_IMG_URL = 'images/paper.png';
const SCISSOR_IMG_URL = 'images/scissors.png';

let arr = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore; 
let computerScore;
let buttons = document.querySelectorAll('.player--buttons button');
let userInput = "";
let computerGuess = "";

function init(){

    buttons.forEach(function(button){
        button.addEventListener('click', () => {
    
            userInput = parseInt(button.getAttribute("value"));
            computerGuess = computerPlay();
    
            // play the round
            let result = playRound(userInput,computerGuess);
    
            // display computers guess to user
            document.querySelector('.game-container__player').classList.remove('focussed');
            document.querySelector('.game-container__computer').classList.add('focussed'); 
    
            document.querySelector('#players-selection-img').setAttribute('src',determineImage(userInput));
            document.querySelector('#computers-selection-img').setAttribute('src',determineImage(computerGuess));
    
            // update the text info with result of round and new score
            document.querySelector('span.starting-info').classList.add('hidden');
            document.querySelector('span.game-info').classList.remove('hidden');
            document.querySelector('span.score-info').classList.remove('hidden');
    
            // Check if either the player or the computer has won
            if (playerScore === 5 || computerScore === 5){
                if (playerScore === 5){
                    document.querySelector('span.game-info').textContent = `${arr[userInput]} beats ${arr[computerGuess]}.\r\n You were first to get 5 points! You win!`; 
                }else{
                    document.querySelector('span.game-info').textContent = `${arr[computerGuess]} beats ${arr[userInput]}. \r\n The computer was first to get 5 points! You lose :(`; 
                }
                document.querySelector('#next-round-btn').classList.add('hidden'); 
                document.querySelector('#play-again-btn').classList.remove('hidden'); 
            }else{
                document.querySelector('span.game-info').textContent = result; 
            }
    
            document.querySelector('span.score-info').textContent = `SCORE: ${playerScore} : ${computerScore}`; 
        })
    });
    
    document.querySelector("#start-button").addEventListener('click', () => {
        playerScore = computerScore = 0;
        document.querySelector('.game-container__start').classList.remove('focussed');
        document.querySelector('.game-container__player').classList.add('focussed');
    });
    
    document.querySelector('#next-round-btn').addEventListener('click', () => {
        document.querySelector('.game-container__computer').classList.remove('focussed');
        document.querySelector('.game-container__player').classList.add('focussed');
        document.querySelector('span.game-info').textContent = ''; 
    });
    
    document.querySelector('#play-again-btn').addEventListener('click', () => {
        playerScore = computerScore = 0;
        document.querySelector('.game-container__computer').classList.remove('focussed');
        document.querySelector('.game-container__player').classList.add('focussed');
        document.querySelector('span.game-info').textContent = ''; 
        document.querySelector('span.score-info').textContent = `Score: ${playerScore} : ${computerScore}`; 
        document.querySelector('#next-round-btn').classList.remove('hidden'); 
        document.querySelector('#play-again-btn').classList.add('hidden'); 
    });

}

// Returns a random integer between 0 and 2
function computerPlay(){
    return Math.floor(Math.random() * 3);
}

//using integers to represent the rock, paper and scissors
//Rock = 0, Paper = 1, Scissors = 2
function playRound(playerSelection, computerSelection){
    
    if(playerSelection === computerSelection){
        return `It's a tie! ${arr[computerSelection]} vs ${arr[playerSelection]}`;
    }else if(playerSelection > computerSelection){
        if(playerSelection === 2 && computerSelection === 0){
            computerScore++;
            return `You lose! ${arr[computerSelection]} beats ${arr[playerSelection]}`;
        }else{
            playerScore++;
            return `You win! ${arr[playerSelection]} beats ${arr[computerSelection]}`;
        }
    }else if(computerSelection > playerSelection){
        if(computerSelection === 2 && playerSelection === 0){
            playerScore++;
            return `You win! ${arr[playerSelection]} beats ${arr[computerSelection]}`;
        }else{
            computerScore++;
            return `You lose! ${arr[computerSelection]} beats ${arr[playerSelection]}`;
        }
    }
}

// Accepts an integer and returns the relevant image icon to be displayed
function determineImage(image){
    switch(image){
        case 0:
            return ROCK_IMG_URL;
        case 1:
            return PAPER_IMG_URL;
        case 2:
            return SCISSOR_IMG_URL;
    }
}


init(); 