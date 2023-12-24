
function updateClock() {

    let hourBox = document.querySelector('.hours')
    let minBox = document.querySelector('.minutes')
    let secBox = document.querySelector('.seconds')
    let tPeriod = document.querySelector('.t-period')


    let date = new Date();

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if (hours > 12) {
        hours = hours - 12;
        tPeriod.innerHTML = "PM"; 
    }

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds


    hourBox.innerHTML = hours;
    minBox.innerHTML = minutes;
    secBox.innerHTML = seconds;

    let currentDate = document.getElementById('date')
    let currentMonth = document.getElementById('month')
    let currentYear = document.getElementById('year')
 
    let cDate = date.getDate();
    let cMonth = date.getMonth();
    let cYear = date.getFullYear();

 currentDate.innerText = cDate + "/" ;
 currentMonth.innerText = cMonth +  "/";
 currentYear.innerText = cYear;
    
 
}

setInterval(() => {
    updateClock()
}, 1000)
