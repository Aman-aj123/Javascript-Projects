const questionsArray = [
     {
          question: "JavaScript is a language?",
          answers: [
               { option: "programming", correct: false },
               { option: "high level", correct: false },
               { option: "scripting", correct: true },
               { option: "none of these", correct: false }
          ],
     },
     {
          question: "What does HTML stand for?",
          answers: [
               { option: "Hyper Text Markup Language", correct: true },
               { option: "High Tech Multi Language", correct: false },
               { option: "Home Tool Markup Language", correct: false },
               { option: "Hyper Transfer Markup Language", correct: false }
          ],
     },
     {
          question: "Which programming language is known as the 'mother of all languages'?",
          answers: [
               { option: "Python", correct: false },
               { option: "C", correct: false },
               { option: "Assembly", correct: false },
               { option: "Cobol", correct: true }
          ],
     },
     {
          question: "What does CSS stand for?",
          answers: [
               { option: "Counter Style Sheet", correct: false },
               { option: "Cascading Style Sheet", correct: true },
               { option: "Computer Style Sheet", correct: false },
               { option: "Colorful Style Sheet", correct: false }
          ],
     },
     {
          question: "What is the main purpose of a 'for' loop in programming?",
          answers: [
               { option: "Conditional statement", correct: false },
               { option: "Iteration or looping", correct: true },
               { option: "Function definition", correct: false },
               { option: "Variable declaration", correct: false }
          ],
     },
     {
          question: "Which symbol is used for single-line comments in JavaScript?",
          answers: [
               { option: "//", correct: true },
               { option: "/*", correct: false },
               { option: "--", correct: false },
               { option: "#", correct: false }
          ],
     },
     {
          question: "What does API stand for?",
          answers: [
               { option: "Advanced Programming Interface", correct: false },
               { option: "Application Programming Interface", correct: true },
               { option: "Automated Programming Interface", correct: false },
               { option: "Application Process Integration", correct: false }
          ],
     },
     {
          question: "Which programming language is often used for machine learning?",
          answers: [
               { option: "Java", correct: false },
               { option: "Python", correct: true },
               { option: "C#", correct: false },
               { option: "Ruby", correct: false }
          ],
     },
     {
          question: "What is the purpose of the 'git' version control system?",
          answers: [
               { option: "Web development", correct: false },
               { option: "Database management", correct: false },
               { option: "Version control and collaboration", correct: true },
               { option: "Graphic design", correct: false }
          ],
     },
     {
          question: "Which keyword is used to declare variables in JavaScript?",
          answers: [
               { option: "var", correct: true },
               { option: "let", correct: false },
               { option: "const", correct: false },
               { option: "variable", correct: false }
          ],
     }
];






let score = 0;
let questionIndex = 0;

const quizArea = document.querySelector(".quiz-area");
const resultArea = document.querySelector(".result-area");
const resultText = document.querySelector(".result-text");
const playAgainBtn = document.querySelector(".play-again");

const questionOptions = document.querySelectorAll(".question-options");
const nextBtn = document.querySelector(".nextBtn");
const questionTitle = document.querySelector(".question-title");

// Function to handle option click
const handleOptionClick = (element) => {
     if (element.id === "true") {
          element.classList.remove("wrong-answer");
          score += 1;
     } else {
          element.classList.add("wrong-answer");
          setTimeout(() => {
               element.classList.remove("wrong-answer");
          }, 1000); // Adjust the delay (in milliseconds) as needed
     }
     console.log(score);
};

// Append question details
const appendQuestionsDetails = () => {
     questionOptions.forEach((element, index) => {
          element.innerHTML = questionsArray[questionIndex].answers[index].option;
          element.id = questionsArray[questionIndex].answers[index].correct;
     });
     questionTitle.innerHTML = questionsArray[questionIndex].question;
     nextBtn.innerHTML = "Next";
};

// Function to set up event listeners
const setupEventListeners = () => {
     questionOptions.forEach((element) => {
          element.removeEventListener("click", handleOptionClick);
          element.addEventListener("click", () => handleOptionClick(element));
     });
};

// Display next quiz
const nextQuiz = () => {
     questionOptions.forEach((element) => element.classList.remove("wrong-answer"));

     questionIndex += 1;
     if (questionIndex >= questionsArray.length) {
          questionIndex = 0;
          resultText.innerHTML = `You scored ${score} out of ${questionsArray.length}`;
          quizArea.style.display = "none";
          resultArea.style.display = "initial";
     }
     appendQuestionsDetails();
     setupEventListeners();
};

// Restart quiz
const playAgain = () => {
     score = 0;
     questionIndex = 0;
     questionOptions.forEach((element) => element.classList.remove("wrong-answer"));
     quizArea.style.display = "block";
     resultArea.style.display = "none";
     appendQuestionsDetails();
     setupEventListeners();
};

// Initial quiz display
appendQuestionsDetails();
setupEventListeners();

// Event listeners
nextBtn.addEventListener("click", nextQuiz);
playAgainBtn.addEventListener("click", playAgain);
