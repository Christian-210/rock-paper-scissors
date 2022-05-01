// let userPlay = prompt(
//   "Please make a selection. Select rock, paper, or scissors."
// ).toLowerCase();

// const rockBtn = document.getElementById("btn-rock");
// const paperBtn = document.getElementById("btn-paper");
// const scissorsBtn = document.getElementById("btn-scissors");

const playerBtns = document.querySelectorAll("button");
const p1Score = document.getElementById("player-score");
const p2Score = document.getElementById("cpu-score");
const gameMsg = document.querySelector(".win-lose-msg");
const playerImg = document.getElementById("player-img");
const cpuImg = document.getElementById("cpu-img");
const imgContainer = document.querySelectorAll(".img-container");
let playerChoice;

let playerScore = 0;
let cpuScore = 0;
let winningScore = 5;

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
  console.log(playerSelection, computerSelection);

  imgContainer[0].classList.remove("img-container");
  imgContainer[1].classList.remove("img-container");
  playerImg.classList.add("show", "player-rotate");
  cpuImg.classList.add("show", "cpu-rotate");

  if (playerSelection === "rock") {
    playerImg.src = "images/rock-paper-scissors-neon-icons_rock-ll.svg";
  } else if (playerSelection === "paper") {
    playerImg.src = "images/rock-paper-scissors-neon-icons_paper-ll.svg";
  } else {
    playerImg.src = "images/rock-paper-scissors-neon-icons_scissors-ll.svg";
  }

  if (computerSelection === "rock") {
    cpuImg.src = "images/rock-paper-scissors-neon-icons_rock-ll.svg";
  } else if (computerSelection === "paper") {
    cpuImg.src = "images/rock-paper-scissors-neon-icons_paper-ll.svg";
  } else {
    cpuImg.src = "images/rock-paper-scissors-neon-icons_scissors-ll.svg";
  }

  if (playerSelection === "rock") {
    if (playerSelection === computerSelection) {
      gameMsg.textContent = `It's a tie!`;
    } else if (computerSelection === "scissors") {
      playerScore++;
      p1Score.textContent = playerScore;
      gameMsg.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      cpuScore++;
      p2Score.textContent = cpuScore;
      gameMsg.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }

  if (playerSelection === "scissors") {
    if (playerSelection === computerSelection) {
      gameMsg.textContent = `It's a tie!`;
    } else if (computerSelection === "paper") {
      playerScore++;
      p1Score.textContent = playerScore;
      gameMsg.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      cpuScore++;
      p2Score.textContent = cpuScore;
      gameMsg.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }

  if (playerSelection === "paper") {
    if (playerSelection === computerSelection) {
      gameMsg.textContent = `It's a tie!`;
    } else if (computerSelection === "rock") {
      playerScore++;
      p1Score.textContent = playerScore;
      gameMsg.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      cpuScore++;
      p2Score.textContent = cpuScore;
      gameMsg.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
}

playerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    playerChoice = btn.value;
    playerImg.classList.add("animate__slideInLeft");
    cpuImg.classList.add("animate__slideInRight");

    setTimeout(() => {
      playerImg.classList.remove("animate__slideInLeft");
      cpuImg.classList.remove("animate__slideInRight");
    }, 1000);

    if (playerScore !== winningScore && cpuScore !== winningScore) {
      playRound(playerChoice, computerPlay());

      if (playerScore === 5) {
        playerBtns.forEach((btn) => btn.setAttribute("disabled", ""));
        gameMsg.textContent = "Congrats! You destroyed your opponent!";
      }

      if (cpuScore === 5) {
        playerBtns.forEach((btn) => btn.setAttribute("disabled", ""));
        gameMsg.textContent =
          "Game over! You have fallen victim to your opponent!";
      }
    }
  });
});

// function game() {
//   let rounds = 5;

//   for (let i = 0; i < rounds; i++) {
//     if (i === 0) {
//       console.log(playRound(userPlay, computerPlay()));
//     } else {
//       userPlay = prompt(
//         "Please make a selection. Select rock, paper, or scissors."
//       ).toLowerCase();

//       console.log(playRound(userPlay, computerPlay()));
//     }
//   }

//   if (playerScore > cpuScore) {
//     console.log(`Congrats! You Won! Player:${playerScore} CPU:${cpuScore}`);
//   } else if (playerScore === cpuScore) {
//     console.log(`Oh darn! It's a tie! Player:${playerScore} CPU:${cpuScore}`);
//   } else {
//     console.log(`Sorry you lost! Player:${playerScore} CPU:${cpuScore}`);
//   }
// }

// game();
