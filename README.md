# General Quiz Application

A simple, responsive web-based quiz application built using HTML, CSS, and JavaScript. Users can enter their name, select a quiz category (Math, Science, History), and answer a series of questions. Scores are displayed at the end of the quiz.

---

## Project Structure

quiz-app/
index.html           # Main entry point
quiz1.html           # Math Quiz
quiz2.html           # Science Quiz
quiz3.html           # History Quiz
quiz1.js             # JavaScript for Math Quiz
quiz2.js             # JavaScript for Science Quiz
quiz3.js             # JavaScript for History Quiz
script.js            # Handles index.html logic
style.css            # Shared styling across all pages
quizStyle.css        # Shared styling across all quizzes
README.md            # Project description

---

## Features

- Name input and quiz selection screen
- Separate quiz pages for Math, Science, and History
- 5 multiple-choice questions per quiz
- Score display upon completion
- Responsive design for mobile and desktop
- Session-based user info tracking

---

## How It Works

- User visits index.html
- Enters their name
- Selects a quiz (Math, Science, History)
- On clicking "Start Quiz"
- User name and selected quiz are saved to sessionStorage
- Redirects to the selected quiz page (e.g., quiz1.html)
- In quiz page (quiz1.html, quiz2.html, quiz3.html.)
- Loads user's name and quiz questions
- Displays questions one by one
- Tracks score and shows result at the end

---

## Quizzes

Each quiz has:

- 5 unique questions
- 4 multiple-choice options
- Immediate question loading on page load
- Final score shown after completion
- You can expand question sets in quiz1.js, quiz2.js, and quiz3.js.

---

## Technologies Used

- HTML – Structure of the application
- CSS – Styling and layout
- JavaScript – Logic, event handling, and storage

---

## Getting Started

To run the app:

- Clone this repository or download the files
- Open index.html in your browser
- Enter your name and select a quiz
- Enjoy the quiz!

---

## Notes

sessionStorage is used to temporarily store user data across pages
All quizzes follow the same structure; only questions and titles vary

---

## Author

Orlando Fernand
