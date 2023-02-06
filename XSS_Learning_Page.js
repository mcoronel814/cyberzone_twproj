const incorrectExplan1 = document.querySelector("#incorrect-explan");
const correctExplan1 = document.querySelector("#correct-explan");
const answer1 = document.querySelector("#answer-choices1");
answer1.addEventListener("click", showExplan1);
function showExplan1() {
  let selected = document.querySelector('input[name="ans1"]:checked');
  const ans1 = selected.value;
  if (ans1 == "A") {
    correctExplan1.classList.remove("hidden");
    incorrectExplan1.classList.add("hidden");
  } else {
    incorrectExplan1.classList.remove("hidden");
    correctExplan1.classList.add("hidden");
  }
}

const incorrectExplan2 = document.querySelector("#incorrect-explan2");
const correctExplan2 = document.querySelector("#correct-explan2");
const answer2 = document.querySelector("#answer-choices2");
answer2.addEventListener("click", showExplan2);
function showExplan2() {
  var selected = document.querySelector('input[name="ans2"]:checked');
  const ans2 = selected.value;
  if (ans2 == "D") {
    correctExplan2.classList.remove("hidden");
    incorrectExplan2.classList.add("hidden");
  } else {
    incorrectExplan2.classList.remove("hidden");
    correctExplan2.classList.add("hidden");
  }
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
    correctExplan3.classList.remove("hidden");
    incorrectExplan3.classList.add("hidden");
  } else {
    incorrectExplan3.classList.remove("hidden");
    correctExplan3.classList.add("hidden");
  }
}
