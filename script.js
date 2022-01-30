let choices = ["rock", "paper", "scissors"];

const computerPlay = (choices) => {
  const random = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[random];
  return computerChoice;
};

const playerSelection = () => {};

let playerChoice = "";

let rockButton = document.querySelector("#rockButton");
let paperButton = document.querySelector("#paperButton");
let scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", () => {
  playerChoice = choices[0];
  console.log(playerChoice);

  // alert('This is the rock button')
});
paperButton.addEventListener("click", () => {
  playerChoice = choices[1];
  console.log(playerChoice);
});
scissorsButton.addEventListener("click", () => {
  playerChoice = choices[2];
  console.log(playerChoice);
});

while (playerChoice === "") {
  let begin = document.querySelector("#beginMessage");
  begin.innerHTML = "PICK AN OPTION TO BEGIN THE GAME";
}

const game = (computerChoice, playerChoice) => {
  let computerScore = 0;
  let userScore = 0;

  if (computerChoice === "rock" && playerChoice === "scissors") {
    return `computer chose ${computerChoice}, which beats ${playerChoice}, computer wins`;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    return `computer chose ${computerChoice}, which beats ${playerChoice}, computer wins`;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    return `computer chose ${computerChoice}, which beats ${playerChoice}, computer wins`;
  }
  // player wiining scenarios
  else if (computerChoice === "rock" && playerChoice === "paper") {
    return `player chose ${playerChoice}, which beats ${computerChoice}, player wins`;
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    return `player chose ${playerChoice}, which beats ${computerChoice}, player wins`;
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    return `player chose ${playerChoice}, which beats ${computerChoice}, player wins`;
  } else {
    return `draw player chose ${playerChoice} and computer chose ${computerChoice}`;
  }
};

//play game 5 times

// for(let i =0; i <5; i++){
//     console.log(game(computerPlay(choices), playerChoice))
// }

//adding changes from wsl2
