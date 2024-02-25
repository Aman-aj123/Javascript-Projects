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
               if (element.dataset.name === itm.dataset.name || element.dataset.name === "All") {
                    itm.classList.remove('hide')
               }
          })
     }

}


// Showing image in the image-show area
function showImage() {
     const totalImageItems = document.querySelectorAll(".filter-images");
     const showImageArea = document.querySelector("#image-show-area");
     const showImage = document.querySelector('#image-show-area img')
     const crossIcon = document.querySelector(".cross-icon");

     // Setting eventListener on each image
     totalImageItems.forEach((element) => {
          element.addEventListener("click", () => {
               showImageArea.style.display = "flex";
               const mainImage = element.querySelector("img");
               showImage.src = mainImage.src;
          })
     })

     // crossIcon eventListener
     crossIcon.addEventListener("click", () => {
          showImageArea.style.display = "none";
     })
}
showImage()

 
