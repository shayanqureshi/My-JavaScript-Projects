const questions = [
  {
    ques: "Which of the following is a MarkUp Language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    ques: "In which year JavaScript launched?",
    a: "1995",
    b: "1996",
    c: "1994",
    d: "NOTA",
    correct: "b",
  },
];

let index = 0;
let right = 0;
let wrong = 0;
const quesBox = document.querySelector(".quesBox");
const optionInputs = document.querySelectorAll(".options");
console.log(optionInputs);
let totalQues = questions.length;
console.log(totalQues);

const loadQuestion = () => {
  if (index === totalQues) {
    return finish();
  }
  reset();
  const data = questions[index];
  //   console.log(data);
  quesBox.innerText = `${index + 1}.) ${data.ques}`;
  optionInputs[0].nextElementSibling.textContent = `${data.a}`;
  optionInputs[1].nextElementSibling.textContent = `${data.b}`;
  optionInputs[2].nextElementSibling.textContent = `${data.c}`;
  optionInputs[3].nextElementSibling.textContent = `${data.d}`;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  console.log(ans, data.correct)
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    console.log(input);
    if (input.checked) {
      answer = input.value;
    }
  });
  console.log(answer);
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const finish = () => {
  const box = document.querySelector(".box");
  box.innerHTML = `
    <h3> Thank you for attempting the Quiz.</h3>
    <h2> ${right} / ${totalQues} are correct.</h2>`;
    box.style.textAlign = "center";
};

//initial call
loadQuestion();

// console.log(questions[0]["a"]);
