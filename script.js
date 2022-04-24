let userPlay = prompt(
  "Please make a selection. Select rock, paper, or scissors."
).toLowerCase();

let playerScore = 0;
let cpuScore = 0;

function computerPlay() {
  const characters = ["rock", "paper", "scissors"];
  const cpuSelect = Math.floor(Math.random() * 3);

  for (let i = 0; i < characters.length; i++) {
    if (cpuSelect === i) {
      return characters[i];
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (playerSelection === computerSelection) {
      return `It's a tie!`;
    } else if (computerSelection === "scissors") {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      cpuScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }

  if (playerSelection === "scissors") {
    if (playerSelection === computerSelection) {
      return `It's a tie!`;
    } else if (computerSelection === "paper") {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      cpuScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }

  if (playerSelection === "paper") {
    if (playerSelection === computerSelection) {
      return `It's a tie!`;
    } else if (computerSelection === "rock") {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      cpuScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
}

function game() {
  let rounds = 5;

  for (let i = 0; i < rounds; i++) {
    if (i === 0) {
      console.log(playRound(userPlay, computerPlay()));
    } else {
      userPlay = prompt(
        "Please make a selection. Select rock, paper, or scissors."
      ).toLowerCase();

      console.log(playRound(userPlay, computerPlay()));
    }
  }

  if (playerScore > cpuScore) {
    console.log(`Congrats! You Won! Player:${playerScore} CPU:${cpuScore}`);
  } else if (playerScore === cpuScore) {
    console.log(`Oh darn! It's a tie! Player:${playerScore} CPU:${cpuScore}`);
  } else {
    console.log(`Sorry you lost! Player:${playerScore} CPU:${cpuScore}`);
  }

  //   console.log(`Player:${playerScore} CPU:${cpuScore}`);
}

// console.log(playGame(userPlay, computerPlay()));
game();
