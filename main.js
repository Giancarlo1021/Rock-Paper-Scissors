function playRound(playerSelection, computerSelection) {
   return console.log(playerSelection, computerSelection)
}

const playerSelection = window.prompt('Choose rock, paper, or scissors').toLowerCase();
let result = false;
 while (result === false){
   if (playerSelection == 'rock' || 'paper' || 'scissors'){
      result = true;
   } else {
      const playerSelection = window.prompt('Please Choose rock, paper, or scissors')
      playerSelection.toLowerCase
   }
 }

 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection));

 function computerPlay(){
   let value = Math.floor(Math.random() * 3);
   if (value === 0){
    return "rock";
   } else if (value === 1){
    return "paper";
   } else {
    return "scissor";
   }
}