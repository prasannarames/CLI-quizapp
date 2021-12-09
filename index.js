let readlineSync = require('readline-sync');
let userName = readlineSync.question("What is your name ? ");

console.log("Hello, " + userName +"\nWelcome to the CLI Quiz APP .......");
console.log(":::::::::::::::::::::::::::");

let questionOne = {
  question : "what is my name ? ",
  answer : "prasanna"
}
let questionTwo = {
  question : "what is my hobby ? ",
  answer : "bike riding"
}
let questionThree = {
  question : "where do i live ? ",
  answer : "chennai"
}
let questionFour = {
  question : "who is my favorite superhero ? ",
  answer : "deadpool"
}
 let score = 0 ;
 function quiz(ques,ans){
   let userAnswers = readlineSync.question(ques);

   if(userAnswers.toLowerCase() === ans){
     console.log("you are right !! ");
     score += 1 ;
   } else {
     console.log("your are wrong !! ");
    
   }
   console.log("your score is ===>>> "+ score);
   console.log(":::::::::::::::::::::::::::");
 }

 let userQuestions = [questionOne, questionTwo, questionThree, questionFour];

for(let i=0; i<userQuestions.length; i++){
  quiz(userQuestions[i].question,userQuestions[i].answer);
}
console.log("your final score is ====> " + score);
console.log(":::::::::::::::::::::::::::");

let leaderBoard = [{name : "kishore", score : 4,},{name : "hemant", score : 3,}, {name: "lal", score : 2,}]

console.log("These are the highscores ");

for(let i=0; i<leaderBoard.length; i++){
  console.log(leaderBoard[i].name + "=====>>>" + leaderBoard[i].score);
}
console.log(":::::::::::::::::::::::::::");
console.log("GAME OVER");