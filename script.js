// script.js

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const quizSelect = document.getElementById("quizSelect");
  const startButton = document.querySelector("button");

  startButton.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const selectedQuiz = quizSelect.value;

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    // Save to session storage for use in quiz pages
    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("selectedQuiz", selectedQuiz);

    // Redirect to the quiz page
    window.location.href = `${selectedQuiz}.html`;
  });
});



