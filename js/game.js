// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly 
// return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. 
// Tip: use the console to make sure this is returning the expected output before moving to the next step!


// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the 
// playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results.

// Define function named computerPlay that will randomly return Rock, Paper, or Scissors.


function computerPlay() { 
    let choices = ['rock', 'paper', 'scissors']; 
    index = Math.floor((Math.random()*3));
    computerSelection = choices[index];
    return computerSelection; 
}

// Define a function called playRound that will accept two parameters, the playerSelection and the computerSelection. Return a string that declares the winner. 

function userPlay() { 
    let selection = prompt('Enter rock, paper, or scissors:');
    selectionFormatted = selection.trim().toLowerCase();
    if (selectionFormatted !== 'rock' && selectionFormatted !== 'paper' && selectionFormatted !== 'scissors' ) {  
        alert('Your entry is not valid. Try again.');
        userPlay();
      }

    return selectionFormatted; 
}
 
function playRound(playerSelection, computerSelection) {

  //Compare playerSelection to computerSelection.

  if (playerSelection === computerSelection) {
      console.log(`You tied this game - you both chose ${computerSelection}!`)
      alert(`You tied this game - you both chose ${computerSelection}! Try again.`);
      return playRound(userPlay(), computerPlay());
  }
 
  if (((playerSelection === 'rock') && (computerSelection === 'paper')) 
      || ((playerSelection === 'paper') && (computerSelection === 'scissors'))
      || ((playerSelection === 'scissors') && (computerSelection === 'rock'))) { 
        console.log(`You lost this game - ${computerSelection} beats ${playerSelection}!`);
        alert(`You lost this game - ${computerSelection} beats ${playerSelection}!`);
        return 'loss';
  }

  console.log(`YOU WON THIS GAME  - ${playerSelection} beats ${computerSelection}!`)
  alert(`YOU WON THIS GAME  - ${playerSelection} beats ${computerSelection}!`);
  return 'win';
}


//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and 
//reports a winner or loser at the end

function game() { 
    let wins = 0;
    let losses = 0;
    let winner; 

    for (let i = 1; i <= 5; i++) { 
        console.log(`Game No. ${i}`);
        let outcome = playRound(userPlay(), computerPlay()); 
        
        switch(outcome) { 
            case 'win': 
              wins++;
              break;let output = `You won ${wins} game(s), lost ${losses} game(s) and tied ${ties} game(s).`
            case 'loss': 
              losses++; 
              break;
            default: 
              return 'Something went wrong';     
        }
    }

    if (wins > losses) { 
        winner = 'PLAYER';
    } else { 
        winner = 'COMPUTER';
    }

    let output = `${winner} WINS! You won ${wins} game(s) and lost ${losses} game(s).`
    console.log(output);
}

// NOTES FOR IMPROVEMENT: 
//Instead of redoing the game if tied, check if num wins and num losses are equal at the end and if so, do a tiebreaker