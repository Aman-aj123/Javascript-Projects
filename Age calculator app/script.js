function showResult() {
     // declaring important variables
     const yearEl = document.querySelector('#yearRes');
     const monthEl = document.querySelector('#monthRes');
     const dayEl = document.querySelector('#dayRes');

     const inputDate = document.querySelector('#date');
     inputDate.max = new Date().toISOString().split("T")[0];

     const currentDate = new Date();

     const inputValue = new Date(inputDate.value);

     // calculate age in years, months, and days
     let yearDiff = currentDate.getFullYear() - inputValue.getFullYear();
     let monthDiff = currentDate.getMonth() - inputValue.getMonth();
     let dayDiff = currentDate.getDate() - inputValue.getDate();

     // adjust for negative values
     if (dayDiff < 0) {
          monthDiff--;
          const lastMonthDays = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
          dayDiff += lastMonthDays;
     }

     if (monthDiff < 0) {
          yearDiff--;
          monthDiff += 12;
     }

     // display the result
     console.log(yearDiff, monthDiff, dayDiff);
     yearEl.innerHTML = yearDiff;
     monthEl.innerHTML = monthDiff;
     dayEl.innerHTML = dayDiff;
}

// getDaysInMonth function 
function getDaysInMonth(year, month) {
     return new Date(year, month, 0).getDate();
}
