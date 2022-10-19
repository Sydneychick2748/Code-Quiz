// var question = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-text");
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var startBtn = document.querySelector("#startBtn");
var score = document.querySelector("#score");
var choice1 = document.getElementById("choice1");
  console.log(choice1);
  var choice2 = document.getElementById("choice2");
  var choice3 = document.getElementById("choice3");
  var choice4 = document.getElementById("choice4");
  var question = document.getElementById("question");
var highScoresList = document.querySelector("#highScoresList");
var finalScoreGlobal = 0;
var scores = JSON.parse(localStorage.getItem("scores")) || [];
console.log(scores);


// this starts the game and then fires of the set time function on start of the game
function startGame() {
setTime();
}

// this my array of questions 
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


// this is the timer that starts when you are taken to the game page
var timeRemaining = true;
var timeStart = false;
var timeEl = document.querySelector("#timer");
var secondsLeft = 85;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      timeEl.textContent = " ";
      // score = timeEl;
      localStorage.setItem("score", score);
      console.log(localStorage);

      // Calls function to create and append image
      endQuiz();
      time = 0;
      document.getElementById("timer").innerHTML = time;
    }
    
  }, 1000);
}

// QUESTIONS FUNCTION: display questions and multiple-choice answers
var i = 0;

function setQuizQuestions() {
  
  
  
  question.textContent = myQuestions[i].questions;
  choice1.textContent = myQuestions[i].choice1;
  choice2.textContent = myQuestions[i].choice2;
  choice3.textContent = myQuestions[i].choice3;
  choice4.textContent = myQuestions[i].choice4;
}



setQuizQuestions();
startGame();



// this is the eventlistener that fires off when the user is playing the game and clicks on the answers
choice1.addEventListener("click", function (event) {
  var clicked = event.target;
  clicked.getAttribute("id");
  
  
  answer = myQuestions[i].answer;
  
  
  if (myQuestions[i].answer === clicked.textContent) {
    // display message to user for 1  second stating if the answer is correct or incorrect
    document.getElementById("AnswerResponse").innerHTML = "Correct";
    
    score++;
    // display updated score progress
  
  } else {
    secondsLeft -= 5;
    // when user answers a question incorrectly, subtract from the time
    document.getElementById("AnswerResponse").innerHTML = "wrong";
    
  }
  if (i >= myQuestions.length - 1) {
    endQuiz();
  } else {
    i++;
    setQuizQuestions();
  }
});

choice2.addEventListener("click", function (event) {
  event.stopPropagation();
  var clicked = event.target;
  clicked.getAttribute("id");
  
 
  answer = myQuestions[i].answer;
 
  if (myQuestions[i].answer === clicked.textContent) {
    document.getElementById("AnswerResponse").innerHTML = "Correct";
    
    score++;
   
  } else {
    secondsLeft -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Wrong";
   
  }
  if (i >= myQuestions.length - 1) {
    endQuiz();
  } else {
    i++;
    setQuizQuestions();
  }
});

choice3.addEventListener("click", function (event) {
  event.stopPropagation();

  var clicked = event.target;
  clicked.getAttribute("id");
  answer = myQuestions[i].answer;
  
  if (myQuestions[i].answer === clicked.textContent) {
    document.getElementById("AnswerResponse").innerHTML = "Correct";
    
    score++;
    
  } else {
    secondsLeft -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Wrong";
    
  }
  if (i >= myQuestions.length - 1) {
    endQuiz();
  } else {
    i++;
    setQuizQuestions();
  }
});

choice4.addEventListener("click", function (event) {
  event.stopPropagation();
  var clicked = event.target;
  clicked.getAttribute("id");

  answer = myQuestions[i].answer;
 
  if (myQuestions[i].answer === clicked.textContent) {
    document.getElementById("AnswerResponse").innerHTML = "Correct";
    
    score++;
   
  } else {
    secondsLeft -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Wrong";
    
  }
  if (i >= myQuestions.length - 1) {
    endQuiz();
  } else {
    i++;
    setQuizQuestions();
  }
});




// need this function if i can not render my own 


// function endQuiz() {
//  var userName = prompt("enter your initials");
  
// // dont want a prompt 



//   finalScoreGlobal = userName + ": " + secondsLeft;
//   scores.push(finalScoreGlobal);
//   localStorage.setItem("score", finalScoreGlobal);
//   localStorage.setItem("scores", JSON.stringify(scores));
//    window.location.href = "/end.html";
// }







// trying to bring the code into the one js file 

// var score = document.querySelector("#finalScore");
// var highScores = document.getElementById("highScoreList")
// var score = document.querySelector("#score");
// // score.textContent= localStorage.getItem("score")
// var scoresList = JSON.parse(localStorage.getItem("scores"))
// var li = document.createElement('li')

// function highScores(){
// for (let i = 0; i < scoresList.length; i++) {
//   score.textContent= localStorage.getItem("score")
//   scoresList = JSON.parse(localStorage.getItem("scores"))
//   li = document.createElement('li')
//     li.textContent = scoresList[i]
//     highScores.appendChild(li)
//     window.location.href = "/highScore.html";
// }
// // score.textContent= localStorage.getItem("score")

// }
// highScores()

var saveButton = document.querySelector("#saveScoreBtn");
var userName= document.querySelector("#username");
var userPasswordSpan = document.querySelector("#user-password");

// get the username to store in the local storage and retrieve info 
function endQuiz() {
  // var userName = prompt("enter your initials");
  
// don't want a prompt 
// var getName= localStorage.getItem("username", getName);
// userName.textContent = getName;
window.location.href = "/end.html";
   
}

saveButton.addEventListener("click", function() {
  // event.preventDefault();
  
  // var getName = document.querySelector("#userName").value;
  console.log( "clicked")
  //  localStorage and render the last registered user
  //   localStorage.setItem("username", getName);
  //   userName.textContent = getName
  //   finalScoreGlobal = userName + ": " + secondsLeft;
  //   scores.push(finalScoreGlobal);
  // localStorage.setItem("score", finalScoreGlobal);
  // localStorage.setItem("scores", JSON.stringify(scores));
  
  //  window.location.href = "/end.html";
  
  // endQuiz()
  
}
);




