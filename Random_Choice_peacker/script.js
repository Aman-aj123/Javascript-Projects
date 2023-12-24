// Intializing important variables
const textAreaEl = document.querySelector('#textArea');
const choiceItemContainer = document.querySelector('.choice-container')

// Adding event listener to the textAreaEl
textAreaEl.addEventListener('keyup', (e) => createChoiceItems(e.target.value));
textAreaEl.addEventListener('keyup', (e) => {
     if (e.key === "Enter") {
          const addInterval = setInterval(addRandomClass, 400)
          const removeInterval = setInterval(removeRandomClass, .000001)

          setTimeout(() => {
               clearInterval(addInterval);
               clearInterval(removeInterval);

               addRandomClass();
          }, 5000);
     }
});

// createChoiceItems function
function createChoiceItems(text) {
     let choiceItemArr = text.trim().split(',').filter((element) => {
          return element.trim() !== "";
     })

     let choiceItems = "";
     // Addingh choiceItems
     choiceItemArr.forEach((el) => {
          el.trim();
          choiceItems += `
          <div class="choice-items">${el}</div>
          `
          choiceItemContainer.innerHTML = choiceItems;
     })

}


// Random Choice generating 


function addRandomClass() {
     const mainChoiceItems = document.querySelectorAll('.choice-items');
     const randomNumber = Math.floor(Math.random() * mainChoiceItems.length);

     mainChoiceItems[randomNumber].classList.add('active-choice');
}
function removeRandomClass() {
     const mainChoiceItems = document.querySelectorAll('.choice-items');
     const randomNumber = Math.floor(Math.random() * mainChoiceItems.length);

     mainChoiceItems[randomNumber].classList.remove('active-choice');

}
