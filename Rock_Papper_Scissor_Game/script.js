// Intializing important variables 
const choicesItems = document.querySelectorAll('.choices-items');
const resultBtn = document.querySelector(".result-btn")
const userScoreElem = document.querySelector("#user-score");
const computerScoreElem = document.querySelector("#computer-score");


let currentUserScore = 0;
let currentComputerScore = 0;

// playGame function
function playGame() {
     computerChoice()
}

// computerChoice function
function computerChoice() {
     const choicesArray = ["Rock", "Papper", "Sissor"];
     const randomNumber = Math.floor(Math.random() * choicesArray.length);
     const randomChoices = choicesArray[randomNumber]

     return randomChoices;
}

// Iterating on choicesItems and addingEventListener
choicesItems.forEach((element) => {
     element.addEventListener("click", () => {
          playGame();
          const userChoiceValue = element.id;
          const computerChoiceValue = computerChoice();

          // Checking conditions for userChoice and computerChoice
          if (userChoiceValue == computerChoiceValue) {
               resultBtn.innerHTML = `Game tie..  You-choose: ${userChoiceValue} and  Computer-choose: ${computerChoiceValue}`;
               resultBtn.classList.add("tie-result");
               resultBtn.classList.remove("loose-result");
               resultBtn.classList.remove("win-result");
          }
          else if (userChoiceValue == "Rock" && computerChoiceValue == "Papper") {
               resultBtn.innerHTML = `Computer win.. and You loose You-choose: ${userChoiceValue} and  Computer-choose: ${computerChoiceValue}`;
               resultBtn.classList.add("loose-result");
               resultBtn.classList.remove("tie-result");
               resultBtn.classList.remove("win-result");
               currentComputerScore += 1;
          }
          else if (userChoiceValue == "Rock" && computerChoiceValue == "Sissor") {
               resultBtn.innerHTML = `You win.. and Computer loose You-choose: ${userChoiceValue} and  Computer-choose: ${computerChoiceValue}`;
               resultBtn.classList.add("win-result");
               resultBtn.classList.remove("loose-result");
               resultBtn.classList.remove("tie-result");
               currentUserScore += 1;
          }
          else if (userChoiceValue == "Papper" && computerChoiceValue == "Rock") {
               resultBtn.innerHTML = `You win.. and Computer loose You-choose: ${userChoiceValue} and  Computer-choose: ${computerChoiceValue}`;
               resultBtn.classList.add("win-result");
               resultBtn.classList.remove("loose-result");
               resultBtn.classList.remove("tie-result");
               currentUserScore += 1;
          }
          else if (userChoiceValue == "Sissor" && computerChoiceValue == "Papper") {
               resultBtn.innerHTML = `You win.. and Computer loose You-choose: ${userChoiceValue} and  Computer-choose: ${computerChoiceValue}`;
               resultBtn.classList.add("win-result");
               resultBtn.classList.remove("loose-result");
               resultBtn.classList.remove("tie-result");
               currentUserScore += 1;
          }
          else if (userChoiceValue == "Papper" && computerChoiceValue == "Sissor") {
               resultBtn.innerHTML = `Computer win.. and You loose You-choose: ${userChoiceValue} and  Computer-choose: ${computerChoiceValue}`;
               resultBtn.classList.add("loose-result");
               resultBtn.classList.remove("tie-result");
               resultBtn.classList.remove("win-result");
               currentComputerScore += 1;
          }
          else if (userChoiceValue == "Sissor" && computerChoiceValue == "Rock") {
               resultBtn.innerHTML = `Computer win.. and You loose You-choose: ${userChoiceValue} and  Computer-choose: ${computerChoiceValue}`;
               resultBtn.classList.add("loose-result");
               resultBtn.classList.remove("tie-result");
               resultBtn.classList.remove("win-result");
               currentComputerScore += 1;
          }

          else {
               currentUserScore = 0;
               currentComputerScore = 0;
               resultBtn.classList.remove("loose-result");
               resultBtn.classList.remove("tie-result");
               resultBtn.classList.remove("win-result");
          }
          userScoreElem.innerHTML = currentUserScore;
          computerScoreElem.innerHTML = currentComputerScore;

          finalWinner();

     })

})

// finalWinner function
function finalWinner() {
     if (currentUserScore === 5) {
          resultBtn.classList.remove("loose-result", "tie-result");
          resultBtn.classList.add("win-result");
          alert("Finally user wins the Game...");
          resetGame();
     }
     else if (currentComputerScore === 5) {
          resultBtn.classList.remove("win-result", "tie-result");
          resultBtn.classList.add("loose-result");
          alert("Finally Computer wins the Game...")
          resetGame();
     }
}

// resetGame function
function resetGame() {
     currentUserScore = 0;
     currentComputerScore = 0;

     userScoreElem.innerHTML = currentUserScore;
     computerScoreElem.innerHTML = currentComputerScore;
     resultBtn.innerHTML = "Click any of the choices to play the game.";
     resultBtn.classList.remove("win-result", "loose-result", "tie-result");
}