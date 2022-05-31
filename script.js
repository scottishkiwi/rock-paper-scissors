
let arr = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore; 
let computerScore;

function computerPlay(){
    return Math.floor(Math.random() * 3);
}

//using integers to represent the rock, paper and scissors
//Rock = 0, Paper = 1, Scissors = 2
function playRound(playerSelection, computerSelection){

    console.log(playerSelection+' : '+computerSelection);
    
    if(playerSelection === computerSelection){
        return `${arr[computerSelection]} vs ${arr[playerSelection]} - It's a tie!`;
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

function game(){

    playerScore = computerScore = 0;

    for(let i = 0; i < 5; i++){
        let userInput = prompt('Choose between Rock, Paper of Scissors:');
        userInput.toUpperCase();
        console.log(userInput.toUpperCase());
        console.log(arr.indexOf(userInput.toUpperCase()));
        if(arr.indexOf(userInput.toUpperCase())!=undefined){
            alert(playRound(arr.indexOf(userInput.toUpperCase()),computerPlay()));
        }else{
            alert("Please ensure you enter 'Rock', 'Paper' or 'Scissors'");
        }
    }

    if (playerScore > computerScore){
        alert(`The score was ${playerScore}:${computerScore} You win!`); 
    }else if (playerScore == computerScore){
        alert(`The score was ${playerScore}:${computerScore} It's a tie!`); 
    }else{
        alert(`The score was ${playerScore}:${computerScore} You lose!`); 
    }

  

}

game();