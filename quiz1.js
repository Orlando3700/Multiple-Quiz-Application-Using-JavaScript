document.addEventListener("DOMContentLoaded", function () {
  const userName = sessionStorage.getItem("userName") || "Student";
  document.getElementById("userName").textContent = userName;

  const quizData = [
    {
      question: "What is 5 + 3?",
      options: ["6", "7", "8", "9"],
      answer: "8"
    },	
	{
	  question: "What is 10 - 4?",
	  options: ["8", "14", "4", "6"],
	  answer: "6"
	 },
	 {
	  question: "What is 6 * 2?",
	  options: ["10", "12", "8", "14"],
	  answer: "12"
	 	 },
    {
      question: "What is 12 / 4?",
      options: ["2", "3", "4", "6"],
      answer: "3"
    },
    {
      question: "What is the square of 6?",
      options: ["36", "30", "12", "18"],
      answer: "36"
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
