// Ex 15
var quizResource=[
  {question:"What's the color of the first stripe in our flag? ",
  answer:"ORANGE"},
  {question:"What's the color of the second stripe in our flag? ",
  answer:"WHITE"},
  {  question:"What's the color of the third stripe in our flag? ",
  answer:"GREEN"},
  {  question:"What's the color of the Ashoka Chakra in our flag? ",
  answer:"BLUE"},
  {  question:"Our flag has a total of five colours (True/False)? ",
  answer:"FALSE"}
];

var highScores=[
  {name:"Sumit",
  score:30},
  {name:"Saurabh",
  score:10}
]

var score=0

console.log("Welcome to fun with flags!\n")
console.log("This quiz contains a total of 5 questions!\n")
console.log("To play this, please enter your ")
var username =prompt("name: ")
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

console.log("Your final score is: "+score+" "+username+"\n");
for(j=0;j<=highScores.length -1;j++){
  console.log("\nOther high scorers are: "+highScores[j].name+" : "+highScores[j].score)
}
console.log("\nIf you've beaten their score, please send me a SS!")
