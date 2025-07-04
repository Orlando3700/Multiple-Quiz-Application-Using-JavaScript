document.addEventListener("DOMContentLoaded", function () {
  const userName = sessionStorage.getItem("userName") || "Student";
  document.getElementById("userName").textContent = userName;

  const quizData = [
    {
      question: "What event marked the beginning of World War 2 in Europe?",
      options: ["The One Hundred Years' War", "The German Invasion of Poland", "The Napoleon Wars", "The Seven Years' Wars"],
      answer: "The German Invasion of Poland"
    },	
	{
	  question: "When was the Declaration of Independence signed?",
	  options: ["1984", "1861", "1776", "1808"],
	  answer: "1776"
	 },
	 {
	  question: "What year did the American Civil War begin?",
	  options: ["1808", "1776", "1861", "1984"],
	  answer: "1861"
	 	 },
    {
      question: "Who was the 16th president of the United States?",
      options: ["Abraham Lincoln", "Thomas Jefferson", "Theodore Roosevelt", "John F. Kennedy"],
      answer: "Abraham Lincoln"
    },
    {
      question: "What do the stripes on the American flag represent?",
      options: ["The States", "The Constitution", "The Presidents", "The Original Colonies"],
      answer: "The Original Colonies"
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const quizBox = document.getElementById("quiz-box");
  const submitBtn = document.getElementById("submitBtn");
  const resultBox = document.getElementById("result");

  function loadQuestion() {
    const q = quizData[currentQuestion];
    quizBox.innerHTML = `
      <h3>Q${currentQuestion + 1}: ${q.question}</h3>
      ${q.options
        .map(
          (opt) =>
            `<label><input type="radio" name="answer" value="${opt}"> ${opt}</label><br>`
        )
        .join("")}
    `;
    resultBox.textContent = "";
  }

  submitBtn.addEventListener("click", function () {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert("Please select an answer.");
      return;
    }

    if (selected.value === quizData[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    quizBox.innerHTML = "";
    submitBtn.style.display = "none";
    resultBox.innerHTML = `
      <h3>Quiz Complete!</h3>
      <p>${userName}, you scored ${score} out of ${quizData.length}.</p>
      <button onclick="location.href='index.html'">Return to Main Page</button>
    `;
  }

  loadQuestion();
});


