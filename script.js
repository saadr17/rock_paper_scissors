let choices = ["rock", "paper", "scissors"];

let rockButton = document.querySelector("#rockButton");
let paperButton = document.querySelector("#paperButton");
let scissorsButton = document.querySelector("#scissorsButton");
let playRoundBtn = document.querySelector("#playRoundBtn");
let playerChoice = "";
let scoreText = document.querySelector("#score");
let playerText = document.querySelector("#player_choice");
let computerText = document.querySelector("#computer_choice");
let announce = document.querySelector("#announce");
let playerScoreText = document.querySelector("#playerScore");
let computerScoreText = document.querySelector("#computerScore");
//computer choice

//player choice
rockButton.addEventListener("click", () => {
  playerChoice = choices[0];
  playerText.innerHTML = playerChoice;
  console.log("playerChoice", playerChoice);
});
paperButton.addEventListener("click", () => {
  playerChoice = choices[1];
  playerText.innerHTML = playerChoice;
  console.log("playerChoice", playerChoice);
});
scissorsButton.addEventListener("click", () => {
  playerChoice = choices[2];
  playerText.innerHTML = playerChoice;
  console.log("playerChoice", playerChoice);
});

//playGame and game logic
const playGame = (playerChoice, choices) => {
  // computerScoreText.innerHTML = playerScore;
  // playerScoreText.innerHTML = computerScore;
  // if (playerScore == 5) {
  //   return (announce.innerHTML = "YOU WIN THE GAME");
  // }
  // if (computerScore == 5) {
  //   return (announce.innerHTML = "COMPUTER WINS GAME");
  // }
  let computerChoice = "";
  const random = Math.floor(Math.random() * choices.length);
  // computerChoice = choices[random];
  computerChoice = choices[random];
  computerText.innerHTML = computerChoice;

  //computer winning scenarios
  if (computerChoice === "rock" && playerChoice === "scissors") {
    // console.log(computerChoice);
    computerScore++;
    return (announce.innerHTML = "Computer Wins");
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    // console.log(computerChoice);
    computerScore++;
    return (announce.innerHTML = "Computer Wins");
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    // console.log(computerChoice);
    computerScore++;
    return (announce.innerHTML = "Computer Wins");
  }
  // player wiining scenarios
  else if (computerChoice === "rock" && playerChoice === "paper") {
    playerScore++;
    return (announce.innerHTML = "You Win");
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    playerScore++;
    return (announce.innerHTML = "You Win");
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    playerScore++;
    return (announce.innerHTML = "You Win");
  } else {
    return (announce.innerHTML = "DRAW");
  }
};
//score tracking
let playerScore = 0;
let computerScore = 0;
playRoundBtn.addEventListener("click", () => {
  playGame(playerChoice, choices);
  if (playerScore == 5) {
    alert("GAME OVER YOU WIN");
  }
  if (computerScore == 5) {
    alert("GAME OVER COMPUTER WINS");
  }
  computerScoreText.innerHTML = computerScore;
  playerScoreText.innerHTML = playerScore;
});
