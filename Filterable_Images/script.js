// Intializing important variables
const filterButtons = document.querySelectorAll('.filter-buttons button')
const filterImageItems = document.querySelectorAll('.filter-images')

// Iterating all filter-buttons 
filterButtons.forEach(iterateButtons)

// IterateButton function
function iterateButtons(element) {
     element.addEventListener('click', () => addRemoveClass())

     // Removing class 
     function addRemoveClass() {
          filterButtons.forEach((btn) => {
               btn.classList.remove('active')
          })
          // Adding class
          element.classList.add('active')

          // Iterating filterImageItems
          filterImageItems.forEach((itm) => {
               itm.classList.add('hide')
               if(element.dataset.name === itm.dataset.name || element.dataset.name === "All") {
               itm.classList.remove('hide')
               }
          })
     }

}