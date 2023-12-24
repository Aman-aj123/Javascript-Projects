// Intializing important variables
const score = document.querySelector('.score')
const highScore = document.querySelector('.highScore')
const firstNum = document.querySelector('.firstNum');
const secondNum = document.querySelector('.secondNum');
const input = document.querySelector('input')
const nextBtn = document.querySelector('.nextBtn');
 

loadData('highScore', highScore)

// Generating random numbers function
let randomNumFirst = 0;
let randomNumSecond = 0;
let scoreValue = 0;

function getRandomNumber(maximumNum, minimumNum, element1, element2) {
     randomNumFirst = Math.floor(Math.random() * minimumNum);
     randomNumSecond = Math.floor(Math.random() * maximumNum);

     element1.innerHTML = randomNumFirst;
     element2.innerHTML = randomNumSecond;
}

getRandomNumber(20, 10, firstNum, secondNum);


// Comparing the both value 
// Next Button function 
nextBtn.addEventListener('click', () => nextQuestion())
input.addEventListener('keyup', (e) => {
     if (e.key === "Enter") {
          nextQuestion()
     }
})

function nextQuestion() {
     const userValue = parseInt(input.value);

     if (userValue === randomNumFirst * randomNumSecond) {
          scoreValue += 1;
     } else {
          scoreValue -= 1;

          // Ensure the score doesn't go below 0
          if (scoreValue <= 0) {
               scoreValue = 0;
          }
     }

     score.innerHTML = `Score: ${scoreValue}`;
     getRandomNumber(20, 10, firstNum, secondNum);

     input.value = "";
     highScore.innerHTML = `High Score: ${scoreValue}`
     saveData('highScore', highScore.innerHTML);
}


// Save data in localStorage
function saveData(key, value) {
     localStorage.setItem(key, value);
}

// load data 
function loadData(key, value) {
     const data = localStorage.getItem(key);
     if (data) {
          value.innerHTML = data;
     }
}