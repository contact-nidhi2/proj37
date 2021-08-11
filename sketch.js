var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


// function draw(){
//   background("pink");
//   if(contestantCount === 2){
//     quiz.update(1);
//   }
//   if(gameState === 1){
//     clear();
//     quiz.play();
//   }
// }
var friends =["rohit","mani","sambhav","vansh"]    

// console.log(friends[0]);
//  console.log(friends[1]);
//  console.log(friends[2]);
//  console.log(friends[3]);

for(var i in friends){
 	console.log(friends[i])
}