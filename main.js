const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const banner = document.querySelector(".banner");

// Attaching empty elements to classes
const playerScoreView = document.createElement('h4');
playerScoreView.classList.add('content');
playerScoreView.textContent = 0;
player.appendChild(playerScoreView);

const computerScoreView = document.createElement('h4');
computerScoreView.classList.add('content');
computerScoreView.textContent = 0;
computer.appendChild(computerScoreView);

const winner = document.createElement('h1');
winner.classList.add('winner');
winner.textContent = '';
banner.appendChild(winner);

// Results are put in a multidemensional array, user choice is first index, computer choice is second,
const results = [
   ['Tie','Player','Computer'],
   ['Computer', 'Tie', 'Player'],
   ['Player', 'Computer', 'Tie']
]

let playerCount = 0;
let computerCount = 0;  

// Player clicks will send a value representing their choice to be put into matric
rockBtn.addEventListener ('click', () => {
   playRound(0, computerPlay());
})

paperBtn.addEventListener ('click', () => {
   playRound(1, computerPlay());
})

scissorsBtn.addEventListener ('click', () => {
   playRound(2, computerPlay());
})

// Random number generator is used for computer choice
const  computerPlay = () => {
   let value = Math.floor(Math.random() * 3);
   if (value === 0){
    return 0;
   } else if (value === 1){
    return 1;
   } else {
    return 2;
   }
}

// Game logic that will be used to validate results, update score, and eventually pick a winner and set values to 0 again
const playRound =  (playerDecision, computerDecision) => {    
      const decision = results[playerDecision][computerDecision];
      console.log(decision);
      if (decision === 'Player'){
         playerCount += 1;
         playerScoreView.textContent = playerCount;
      } 
      if(decision === 'Computer') {
         computerCount += 1;
         computerScoreView.textContent = computerCount;
      }
      if (playerCount > 4){
         winner.textContent = 'Player Wins!'
         playerCount = 0;
         computerCount = 0;
         playerScoreView.textContent = playerCount;
         computerScoreView.textContent = computerCount;
      }
      if (computerCount > 4){
         winner.textContent = 'Computer Wins!'
         computerCount = 0;
         playerCount = 0;
         playerScoreView.textContent = playerCount;
         computerScoreView.textContent = computerCount;
      }
}