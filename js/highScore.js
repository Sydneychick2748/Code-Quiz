

var score = document.querySelector("#finalScore");
var highScores = document.getElementById("highScoreList")
var score = document.querySelector("#score");
score.textContent= localStorage.getItem("score")
var scoresList = JSON.parse(localStorage.getItem("scores"))
for (let i = 0; i < scoresList.length; i++) {
    var li = document.createElement('li')
    li.textContent = scoresList[i]
    highScores.appendChild(li)
}
score.textContent= localStorage.getItem("score")
// scoresList.textContent =localStorage.getItem("scores")

var  clearScoreButton = document.getElementById("clearScoreButton")
 clearScoreButton.addEventListener("click", function () {

        highScores = [];
        score=0;
        secondsLeft="";
        scoresList = ''; 
        console.log(clearScoreButton, "clicked")
     
    });

    // refresh the site 
    // function clearUp(){
    
    // time=75;
    // timeRemaining=true;
    // timeStart=false;
    // i=0;
    // score=0;
    // }
