


function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
   if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb') {
     return userInput;
   } else {
     console.log("error!")
   }
 }
 
 
 
 
 function getComputerChoice(){
   let choiceNum = Math.floor(Math.random() * 3)
   if (choiceNum == 0) {
     return 'rock';
   } else if (choiceNum == 1) {
     return 'paper';
   } else if (choiceNum == 2) {
     return 'scissors';
   }
 }
 
 function determineWinner(userChoice, computerChoice) {
   if (userChoice == 'bomb') {
     return "user wins by bombardment!"
   }
   if (userChoice === computerChoice) {
     return 'Tie Game!'
   } else if (userChoice == 'rock'){
       if (computerChoice == 'paper') {
         console.log("Computer wins!")
       } else {
         console.log("User Wins!")
       } 
   } else if (userChoice == 'paper') {
       if (computerChoice == 'scissors') {
         console.log("Computer Wins!") 
       } else {
         console.log("User Wins!")
       }
   } else if (userChoice == 'scissors') {
       if (computerChoice == 'rock') {
         console.log("Computer Wins!")
       } else {
         console.log("User Wins!")
       }
   }
 }
 
 
 function playGame() {
   let userChoice = getUserChoice('bomb');
   console.log(userChoice);
   let computerChoice = getComputerChoice('paper');
   console.log(computerChoice);
 
   console.log(determineWinner(userChoice, computerChoice));
 }
 
 playGame()
 // console.log(getUserChoice('clocks'));
 // console.log(getUserChoice('rock'));
 // console.log(getComputerChoice());
 // console.log(determineWinner('rock', 'scissors'));
 