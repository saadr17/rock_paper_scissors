let choices =['rock', 'paper', 'scissors']

const computerPlay = (choices) => {
const random = Math.floor(Math.random()*choices.length)
  let computerChoice = choices[random]
return computerChoice
    
};

const playerSelection = () => {
  let playerChoice = parseInt(prompt('pick rock(0) paper(1) or scissors(2)'));
return choices[playerChoice]
};


// console.log(
// computerPlay(choices)
// )

// console.log(
//     playerSelection()
// )

const game = (computerChoice, playerChoice) => {
  if(computerChoice === 'rock' && playerChoice === 'scissors'){
      return `computer chose ${computerChoice}, which beats ${playerChoice}, computer wins`
  }else if(computerChoice === 'paper' && playerChoice === 'rock'){
      return `computer chose ${computerChoice}, which beats ${playerChoice}, computer wins`
  }else if(computerChoice === 'scissors' && playerChoice === 'paper'){
      return `computer chose ${computerChoice}, which beats ${playerChoice}, computer wins`
  }
// player wiining scenarios
  else if(computerChoice === 'rock' && playerChoice === 'paper'){
return `player chose ${playerChoice}, which beats ${computerChoice}, player wins`
  }else if(computerChoice === 'paper' && playerChoice === 'scissors'){
    return `player chose ${playerChoice}, which beats ${computerChoice}, player wins`
      }
      else if(computerChoice === 'scissors' && playerChoice === 'rock'){
          return `player chose ${playerChoice}, which beats ${computerChoice}, player wins`
      }
      else{
          return `draw player chose ${playerChoice} and computer chose ${computerChoice}`
      }
};

//play game 5 times

for(let i =0; i <5; i++){
    console.log(game(computerPlay(choices), playerSelection()))
}

