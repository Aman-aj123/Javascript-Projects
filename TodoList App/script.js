// Calling the mainTodo function
window.addEventListener('load', () => mainTodo())

// mainTodo function
function mainTodo() {
     // Initializing important variables
     const inputEl = document.querySelector('#input');
     const addBtn = document.querySelector('#addButton');
     const listArea = document.querySelector('.listArea');
     loadData();

     // Adding Event listener to the add button
     addBtn.addEventListener('click', () => addTodo());
     inputEl.addEventListener('keyup', (e) => {
          if (e.key === "Enter") {
               addTodo();
          }
     });

     // addTodo function 
     function addTodo() {
          let inputValue = inputEl.value.trim();
          listArea.innerHTML += `
          <div class="listItems">
             <div class="todoText">
               <p id="todoTxt">${inputValue}</p>
             </div>
             <div class="todoControl">
                <button class="btnPrimary editButton" id="deleteButton">Edit</button>
                <button class="btnPrimary deleteButton" id="deleteButton">Delete</button>
             </div>
          </div> 
        `;
          saveData();
          inputEl.value = "";
     }

     // Delete button function 
     listArea.addEventListener('click', (e) => {
          if (e.target.classList.contains('deleteButton')) {
               const targetEl = e.target.parentNode.parentNode;
               targetEl.style.display = "none";
               saveData()
          }
     });

     

// Save Date function
function saveData() {
     localStorage.setItem('text', listArea.innerHTML);
}

// Load Date function
function loadData() {
     const data = localStorage.getItem('text');
     if (data) {
          listArea.innerHTML = data;
     }
}
}

// localStorage.clear()
