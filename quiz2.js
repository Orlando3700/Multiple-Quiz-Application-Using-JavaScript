document.addEventListener("DOMContentLoaded", function () {
  const userName = sessionStorage.getItem("userName") || "Student";
  document.getElementById("userName").textContent = userName;

  const quizData = [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Neptune", "Jupiter"],
      answer: "Mars"
    },	
	{
	  question: "What is the hardest natural substance on Earth?",
	  options: ["Diamond", "Ruby", "Sapphire", "Gold"],
	  answer: "Diamond"
	 },
	 {
	  question: "What is the study of living things called?",
	  options: ["Chemistry", "Physics", "Biology", "Geology"],
	  answer: "Biology"
	 	 },
    {
      question: "What is the smallest unit of matter?",
      options: ["Electron", "Molecule", "Proton", "Atom"],
      answer: "Atom"
    },
    {
      question: "What is the chemical formula for water?",
      options: ["H20", "CO2", "HCL", "NACL"],
      answer: "H20"
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


