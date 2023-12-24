
// window.addEventListener('DOMContentLoaded', () => getWeather("Mumbai"))

async function getWeather(cityName) {
    const apiKey = 'd912be0db3933bbe727abca5a789f09f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    // Attaching the weather information in cards

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        weatherName.textContent = data.name;
        weatherTemp.textContent = `${data.main.temp}°`;
        weatherTempMin.textContent = `${data.main.temp_min}°`;
        weatherTempMax.textContent = `${data.main.temp_max}°`;
        weatherHumidity.textContent = `${data.main.humidity}°`;
        weatherPressure.textContent = `${data.main.pressure}°`;
        weatherVisibility.textContent = `${data.visibility}`;
        weatherSpeed.textContent = `${data.wind.speed}km/hour`;
        weatherSunrise.textContent = `${data.sys.sunrise}`;
        weatherSunset.textContent = `${data.sys.sunset}`;
        weatherClouds.textContent = `${data.clouds.all}`;

        if (data.clouds.all < 89) {
            weatherImg.src = " images/sunny.png"
        }
        else if (data.clouds.all > 10) {
            weatherImg.src = " images/cloudy.webp"
        }
        else if (data.clouds.all > 90) {
            weatherImg.src = " images/windy.png"
        }
        else if (data.clouds.all > 200) {
            weatherImg.src = " images/windy.png"
        }
        else if (data.clouds.all > 300) {
            weatherImg.src = " images/sunny.png"
        }
        else {
            weatherImg.src = " images/sunny.png"  
        }

    } catch (error) {
        console.error("there was an error", error);
    }
}


// Search bar funcnality
const inputBox = document.querySelector('#input')
const searchIcn = document.querySelector("#searchIcn")

function searchWeather() {
    let inputValue = inputBox.value.trim();
    getWeather(inputValue)
}




searchIcn.addEventListener("click", () => searchWeather())   