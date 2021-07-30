// Ex 15
var quizResource=[
  {question:"What's the color of the first stripe in our flag? ",
  answer:"ORANGE"},
  {question:"What's the color of the second stripe in our flag? ",
  answer:"WHITE"},
  {  question:"What's the color of the third stripe in our flag? ",
  answer:"GREEN"}
];

var highScores=[
  {name:"Sumit",
  score:30},
  {name:"Saurabh",
  score:10}
]

var score=0

console.log("Welcome to fun with flags!\n")

function quiz(ques,ans){
 
  var userAns=prompt(ques).toUpperCase();
  if(userAns === ans){
    console.log("Correct answer!")
    score+=10;
  }else{
    console.log("Incorrect answer!")
    score-=10;
  }
}

for (i=0;i<=quizResource.length -1;i++){
  quiz(quizResource[i].question,quizResource[i].answer)
}

console.log("Your final score is: "+score);
for(j=0;j<=highScores.length -1;j++){
  console.log("\nOther high scorers are: "+highScores[j].name+" : "+highScores[j].score)
}
console.log("\nIf you've beaten their score, please send me a SS!")
























// Ex 01
// console.log("My name is Sumit")

// Ex 02
// var readlineSync = require('readline-sync');
// var userName= readlineSync.question("What's your name mortal? ");
// console.log(userName+" is a mere mortal!")

// Ex 03
// var readlineSync=require("readline-sync")
// var planetName=readlineSync.question("Which planet do you live on mortal? ")
// const greeting="Next destination on my space voyage is plane "+planetName;
// console.log(greeting);

// Ex 04
// var readlineSync = require("readline-sync");
// var userName=readlineSync.question("What's your name? ");
// const greeting= "Hello there ";
// console.log(greeting+userName);

// Ex 05
// var readlineSync=require("readline-sync");
// var userAge=readlineSync.question("What's your age mortal? ");
// if(userAge>25){
//   console.log("Right!")
// }else{
//   console.log("Wrong!")
// }

// Ex 06
// var readlineSync=require("readline-sync");
// var userAns=readlineSync.question("Is New Delhi the capital of India?(Y/N) ");
// var score=0;
// if (userAns==="Y"){
//   console.log("Correct answer!")
//   score+=10;
// }else{
//   score-=10;
// }
// console.log("Your score is "+score);

// Ex 07
// function adder(numOne, numTwo){
//   let sum = numOne + numTwo;
//   return sum;
// }
// var result=adder(2,4);
// console.log(result+" is the sum of 2 and 4.")

// Ex 08
// var score = 0;
// function qna(ques, ans){
//   var userAns=prompt(ques)
//   if (userAns===ans){
//     score+=10;
//     console.log("Correct answer!")
//   }else{
//     score-=10;
//     console.log("Incorrect answer")
//   }
//   console.log("And your score is "+score)
// }

// qna("Is Mumbai in India?(Y/N) ","Y");

// Ex 09
// for(i=0;i<5;i++){
//   console.log("My name is Sumit");
// }

// Bonus
// var str = ""
// for(i=0;i<5;i++){
//   for(k=0;k<=i;k++){
//   str+="*"
//   }
//   str+="\n"
// }
// console.log(str)

// Bonus
// var st=""
// for(i=0;i<5;i++){
//   for(j=5;j>i;j--){
//     st+="*"
//   }
//   st+="\n"
// }
// console.log(st)

// Ex 10
// var grocery=["milk","eggs","bread","meds","yogurt"]
// console.log(grocery[0]);
// console.log(grocery[2]);
// var index=grocery.length -1;
// console.log(grocery[index]);

// Ex 11
// var grocery=["milk","eggs","bread","medicines","yogurt"]
// for (i=0;i<grocery.length;i++){
//   console.log(grocery[i])
// }

// Ex 12
// var superman={
//   name:"Kent",
//   strength:99,
//   stealth:40,
// };
// var batman={
//   name:"Bruce",
//   strength:80,
//   stealth:100,
// }
// console.log(batman.name)

// Ex 13
// questionOne={
//   question:"What's the color of the first stripe in our flag?",
//   answer:"Orange"
// }

// questionTwo={
//   question:"What's the color of the second stripe in our flag?",
//   answer:"White"
// }

// questionThree={
//   question:"What's the color of the third stripe in our flag?",
//   answer:"Green"
// }

// Ex 14
// var quizResource=[
//   {question:"What's the color of the first stripe in our flag? ",
//   answer:"ORANGE"},
//   {question:"What's the color of the second stripe in our flag? ",
//   answer:"WHITE"},
//   {  question:"What's the color of the third stripe in our flag? ",
//   answer:"GREEN"}
//   ];


// function quiz(ques,ans){
//   var userAns=prompt(ques).toUpperCase();
//   if(userAns === ans){
//     console.log("Correct answer!")
//   }else{
//     console.log("Incorrect answer!")
//   }
// }

// for (i=0;i<=quizResource.length -1;i++){
//   quiz(quizResource[i].question,quizResource[i].answer)
// }

