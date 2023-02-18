var score = 0;
var scoreTotal = 0;
var finalScore = 0;
var first = document.querySelector('input[name="ans1"]:checked');

const incorrectExplan1 = document.querySelector("#incorrect-explan");
const correctExplan1 = document.querySelector("#correct-explan");
const answer1 = document.querySelector("#answer-choices1");
answer1.addEventListener("click", showExplan1);
function showExplan1() {
    var selected = document.querySelector('input[name="ans1"]:checked');
  const ans1 = selected.value;
  if (ans1 == "A") {
    score =  score + 1;
  } else {
    score =  score + 0;
  }
  console.log(score);
}

const incorrectExplan2 = document.querySelector("#incorrect-explan2");
const correctExplan2 = document.querySelector("#correct-explan2");
const answer2 = document.querySelector("#answer-choices2");
answer2.addEventListener("click", showExplan2);
function showExplan2() {
    var selected = document.querySelector('input[name="ans2"]:checked');
  const ans2 = selected.value;
  if (ans2 == "D") {
    score =  score + 1;
  } else {
    score =  score + 0;
  }
  console.log(score);
}

const incorrectExplan3 = document.querySelector("#incorrect-explan3");
const correctExplan3 = document.querySelector("#correct-explan3");
const answer3 = document.querySelector("#answer-choices3");
var value3 = document.getElementsByClassName(".ans3");
answer3.addEventListener("click", showExplan3);
function showExplan3() {
  var selected = document.querySelector('input[name="ans3"]:checked');
  const ans3 = selected.value;
  if (ans3 == "C") {
    score =  score + 1;
  } else {
    score =  score + 0;
  }
  console.log(score);
}

const incorrectExplan4 = document.querySelector("#incorrect-explan4");
const correctExplan4 = document.querySelector("#correct-explan4");
const answer4 = document.querySelector("#answer-choices4");
var value4 = document.getElementsByClassName(".ans4");
answer4.addEventListener("click", showExplan4);
function showExplan4() {
  var selected = document.querySelector('input[name="ans4"]:checked');
  const ans4 = selected.value;
  if (ans4 == "B") {
    score =  score + 1;
  } else {
    score =  score + 0;
  }
  console.log(score);
}

const incorrectExplan5 = document.querySelector("#incorrect-explan5");
const correctExplan5 = document.querySelector("#correct-explan5");
const answer5 = document.querySelector("#answer-choices5");
var value5 = document.getElementsByClassName(".ans5");
answer5.addEventListener("click", showExplan5);
function showExplan5() {
  var selected = document.querySelector('input[name="ans5"]:checked');
  const ans5 = selected.value;
  if (ans5 == "A") {
    score =  score + 1;
  } else {
    score =  score + 0;
  }
  console.log(score);
}

var chances = 1;
const totalScoreText = document.querySelector("#total-score-text");
const submitButton = document.querySelector("#submit-button");
const submitBox = document.querySelector("#submit-box");
const highScoreBox = document.querySelector("#high-score-box");
const retryScoreBox = document.querySelector("#retry-score-box");
const lowRetryScoreBox = document.querySelector("#low-retry-score-box");
const highRetryScoreBox = document.querySelector("#high-retry-score-box");
const nextButton = document.querySelector("#next-button");
const retryButton = document.querySelector("#retry-button");
submitButton.addEventListener("click", submitAnswers);
function submitAnswers() {
    var first = document.querySelector('input[name="ans1"]:checked');
    var second = document.querySelector('input[name="ans2"]:checked');
    var third = document.querySelector('input[name="ans3"]:checked');
    var forth = document.querySelector('input[name="ans4"]:checked');
    var fifth = document.querySelector('input[name="ans5"]:checked');
    if (first.checked && second.checked && third.checked && forth.checked && fifth.checked) {
        scoreTotal = score * 20;
        if (scoreTotal >= 80 && chances == 1) {
            document.querySelector("#total-score").innerHTML = scoreTotal;
            submitBox.classList.add("hidden");
            highScoreBox.classList.remove("hidden");
            correctExplan1.classList.remove("hidden");
            correctExplan2.classList.remove("hidden");
            correctExplan3.classList.remove("hidden");
            correctExplan4.classList.remove("hidden");
            correctExplan5.classList.remove("hidden");
            chances = 2;
            finalScore = scoreTotal;
        }
        else if (scoreTotal < 80 && chances == 1) {
            document.querySelector("#retry-total-score").innerHTML = scoreTotal;
            submitBox.classList.add("hidden");
            retryScoreBox.classList.remove("hidden");
            chances = 2;
        }
        else if (scoreTotal >= 80 && chances == 2) {
            document.querySelector("#high-retry-total-score").innerHTML = scoreTotal;
            submitBox.classList.add("hidden");
            highRetryScoreBox.classList.remove("hidden");
            correctExplan1.classList.remove("hidden");
            correctExplan2.classList.remove("hidden");
            correctExplan3.classList.remove("hidden");
            correctExplan4.classList.remove("hidden");
            correctExplan5.classList.remove("hidden");
            finalScore = scoreTotal;
        }
        else if (scoreTotal < 80 && chances == 2) {
            document.querySelector("#low-retry-total-score").innerHTML = scoreTotal;
            submitBox.classList.add("hidden");
            lowRetryScoreBox.classList.remove("hidden");
            correctExplan1.classList.remove("hidden");
            correctExplan2.classList.remove("hidden");
            correctExplan3.classList.remove("hidden");
            correctExplan4.classList.remove("hidden");
            correctExplan5.classList.remove("hidden");
            finalScore = scoreTotal;
        }
        else {
            console.log("Fail");
        }

    }
}

retryButton.addEventListener("click", retryQuiz);
function retryQuiz() {
    document.querySelector('input[name="ans1"]:checked').checked = false;
    document.querySelector('input[name="ans2"]:checked').checked = false;
    document.querySelector('input[name="ans3"]:checked').checked = false;
    document.querySelector('input[name="ans4"]:checked').checked = false;
    document.querySelector('input[name="ans5"]:checked').checked = false;
    submitBox.classList.remove("hidden");
    highScoreBox.classList.add("hidden");
    retryScoreBox.classList.add("hidden");
    score = 0;
    scoreTotal = 0;
}
