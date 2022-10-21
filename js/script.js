// var question = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-text");
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var startBtn = document.querySelector("#startBtn");
var score = document.querySelector("#score");
var highScoresList = document.querySelector("#highScoresList");

var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var i = 0;

let myQuestions = [
  {
    questions:
      " What is the HTML tag under which you can write the JavaScript code?",

    choice1: "javascript",
    choice2: "scripted",
    choice3: "script",
    choice4: "js",

    answer: "script",
  },

  {
    questions:
      "Which method adds a new item to the end of an array and returns the new length?",

    choice1: "shift()",
    choice2: " return() ",
    choice3: "push() ",
    choice4: "pop()",

    answer: "push() ",
  },
  {
    questions:
      " Which of the following can't be done with client-side JavaScript?",

    choice1: " Sending a form's contents by email",
    choice2: "Validating a form",
    choice3: "Storing the form's contents to a database file on the server",
    choice4: "None of the above",

    answer: " Sending a form's contents by email",
  },
  {
    questions:
      " Which of the following are capabilities of functions in JavaScript?",

    choice1: "Return a value",
    choice2: "Accept parameters",
    choice3: "Accept parameters and Return a value",
    choice4: "All of the above",

    answer: "All of the above",
  },
];

var finalScoreGlobal = 0;

var scores = JSON.parse(localStorage.getItem("scores")) || [];

function setQuizQuestions() {
  var question = document.getElementById("question");
  if (question) {
    question.textContent = myQuestions[i].questions;
    choice1.textContent = myQuestions[i].choice1;
    choice2.textContent = myQuestions[i].choice2;
    choice3.textContent = myQuestions[i].choice3;
    choice4.textContent = myQuestions[i].choice4;
  }
}
// var scoresList = JSON.parse(localStorage.getItem("scores")) || [];

// console.log(scores);

// this starts the game and then fires of the set time function on start of the game

// function startGame() {
//   //  setTime();
//   startGame();
// }

setQuizQuestions();

// this my array of questions

// this is the timer that starts when you are taken to the game page
var timeRemaining = true;
var timeStart = false;
var secondsLeft = 85;

var timerInterval;

// Sets interval in variablable
var timeEl = document.querySelector("#timer");

if (timeEl) {
  setTime();
}

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;

    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      timeEl.textContent = " ";
      // score = timeEl;
      localStorage.setItem("score", score);

      // Calls function to create and append image
      endQuiz();
      time = 0;
      document.getElementById("timer").innerHTML = time;
    }
  }, 1000);
}

// QUESTIONS FUNCTION: display questions and multiple-choice answers

// this is the eventlistener that fires off when the user is playing the game and clicks on the answers

const quizContainer = document
.querySelector("#quizContainer");

if (quizContainer) {
  quizContainer
    .addEventListener("click", function (event) {
      if (event.target.matches(".choice-text")) {
        event.stopPropagation();
  
        var clicked = event.target;
        clicked.getAttribute("id");
        answer = myQuestions[i].answer;
  
        if (myQuestions[i].answer === clicked.textContent) {
          document.getElementById("AnswerResponse").innerHTML = "Correct";
        } else {
          secondsLeft -= 5;
          document.getElementById("AnswerResponse").innerHTML = "Wrong";
        }
  
        i++;
  
        if (i === myQuestions.length) {
          endQuiz();
        } else {
          setQuizQuestions();
        }
      }
    });
}

// need this function if i can not render my own

function endQuiz() {
  clearInterval(timerInterval);
  var userName = prompt("enter your initials");
  finalScoreGlobal = userName + ": " + secondsLeft;
  scores.push(finalScoreGlobal);

  const data = {
    name: userName,
    score: secondsLeft,
  };

  let oldData = JSON.parse(localStorage.getItem("data")) || [];
  oldData.push(data);
  localStorage.setItem("data", JSON.stringify(oldData));
  window.location.href = "./end.html";
}

var viewHighScore = document.getElementById("highScores");
console.log (viewHighScore, "higscores")
if (viewHighScore) {
  console.log("clicked");
  var highScores = document.getElementById("highScoreList");
  console.log(highScores, "hi")
  let oldData = JSON.parse(localStorage.getItem("data")) || [];

  for (let i = 0; i < oldData.length; i++) {
    var li = document.createElement("li");
    li.textContent = oldData[i].name + ": " + oldData[i].score;
    highScores.appendChild(li);
  }
}
//document.getElementById("highScoreList").innerHTML = highScores;
//grab the HTML element for the list

// highScore.textContent = localStorage.getItem("data");
// scoresList.textContent = localStorage.getItem("scores");



var clearScoreButton = document.getElementById("clearScoreBtn");
if (clearScoreButton) {
  clearScoreButton.addEventListener("click", function () {
    highScores = [];
    score = 0;
    secondsLeft = "";
    scoresList = "";
    console.log(clearScoreButton, "clicked");
    
    localStorage.setItem("data", '[]');
    var highScores = document.getElementById("highScoreList");
    highScores.innerHTML = "";
  });
}
