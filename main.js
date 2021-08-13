const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");

rockBtn.addEventListener ('click', () => {
   console.log('Rock!')
})

paperBtn.addEventListener ('click', () => {
   console.log('Paper!')
})

scissorsBtn.addEventListener ('click', () => {
   console.log('Scissors!')
})

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