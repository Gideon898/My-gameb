const questions = [
  {
    q: "Who led the Israelites out of Egypt?",
    options: ["Abraham", "Moses", "Noah", "Joshua"],
    answer: "Moses"
  },
  {
    q: "How many days did God take to create the world?",
    options: ["5", "6", "7", "8"],
    answer: "6"
  },
  {
    q: "What is the first book of the Bible?",
    options: ["Genesis", "Exodus", "Psalms", "Matthew"],
    answer: "Genesis"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  resultEl.textContent = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[current].answer;
  if (selected === correct) {
    correctSound.play();
    resultEl.textContent = "✅ Correct!";
    score++;
  } else {
    wrongSound.play();
    resultEl.textContent = "❌ Wrong! Answer: " + correct;
  }

  scoreEl.textContent = "Score: " + score;

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "🎉 Game Over!";
      optionsEl.innerHTML = "";
      resultEl.textContent = "Final Score: " + score;
    }
  }, 2000);
}

loadQuestion();
