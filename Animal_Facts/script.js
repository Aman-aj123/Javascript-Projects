
// Intializing important variables 
const preloaderEl = document.querySelector(".preloader");
const inputBox = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBtn");
const factsArea = document.querySelector(".facts-area");
const factName = document.querySelector(".fact-name");
const animalImageElement = document.querySelector("#animal-image");

// Fetching our animal data
async function fetchData(query) {
     try {

          preloaderEl.classList.remove('hide-preloader');
          factsArea.style.display = "none";

          const URL = await fetch(`https://factsapi.developerAman.repl.co/api/animals/${query}`);
          const response = await URL.json();
          getResponse(response)

          factName.innerHTML = `<h2 class="fact-error-title">Facts for ${query} animal are:`;
          animalImageElement.src = `https://source.unsplash.com/400x600/?${query}`;

          preloaderEl.classList.add('hide-preloader');
          factsArea.style.display = "flex";

          if (response.error) {
               console.log(`Error occurs in type: ${response.error}`)
          }
     }
     catch (error) {
          console.log(`Your URL got some error with: ${query}`)

          preloaderEl.classList.add('hide-preloader');

          factName.innerHTML = `<h2 class="fact-error-title">Facts for ${query} animal is not  available..`;
          factsArea.innerHTML = `<h1 style="margin-top: 30px;" class="main-error-title">Try another  keyword insted of  ${query}..</h1>`;
          animalImageElement.src = `images/not-found`;

     }
}
// calling the function to display a default animal 
window.addEventListener("DOMContentLoaded", () => {
     fetchData('parrot');
});



// Appending all the data into HTML div.
function getResponse(data) {
     const animalFact = Array.from(data.facts);

     let factsAreaHTML = "";

     animalFact.forEach((facts, index) => {
          const factItemsBackground = generateRandomColor();
          const factItemsSecondBackground = generateSecondRandomColor();

          factsAreaHTML += `
          <div class="facts-items" style="background: linear-gradient(to right, ${factItemsSecondBackground}, ${factItemsBackground} 100%);">
          <b style="font-weight: 500; margin-right: 2px;">${index + 1}.</b> ${facts}
       </div>
          `;
          factsArea.innerHTML = factsAreaHTML;

     })

}



// Fetching animalFacts from inputValue value
function fetchInputValues() {
     let inputValue = inputBox.value.trim();
     if (inputValue !== "") {
          const lowerCaseInputValue = inputValue.toLowerCase();

          fetchData(lowerCaseInputValue);

          inputBox.value = "";
     }
     else {
          alert("Please search any keyword to know the facts of a Animal.")
          return;
     }

}

// calling the fetchInputValues function
searchBtn.addEventListener("click", () => {
     fetchInputValues();
});

inputBox.addEventListener("keyup", (e) => {
     if (e.key == "Enter") {
          fetchInputValues();
     }
})


// Generate Random hex colors
function generateRandomColor() {
     const colorPattern = `0123456789ABCDEF`;
     let i = 0;
     let storeValue = "#";
     while (i < 6) {
          i++;
          const randomNumbers = Math.floor(Math.random() * colorPattern.length);
          storeValue += colorPattern[randomNumbers];
     }
     return storeValue;

}


function generateSecondRandomColor() {
     const colorPattern = `0123456789ABCDEF`;
     let i = 0;
     let storeValue = "#";
     while (i < 6) {
          i++;
          const randomNumbers = Math.floor(Math.random() * colorPattern.length);
          storeValue += colorPattern[randomNumbers];
     }
     return storeValue;

}
