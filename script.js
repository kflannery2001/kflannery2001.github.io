// Ron Swanson Quotes API
const dataSource = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

fetch(dataSource)
  .then((res) => res.json())
  .then((data) => {
    const introSection = document.querySelector("#intro");
    const quoteElement = document.createElement("blockquote");
    quoteElement.textContent = `"${data[0]}"`;
    introSection.insertAdjacentElement("afterend", quoteElement);
  })
  .catch((error) => {
    const introSection = document.querySelector("#intro");
    const errorElement = document.createElement("blockquote");
    errorElement.textContent = "Failed to load quote. Please try again.";
    introSection.insertAdjacentElement("afterend", errorElement);
  });

// Weather API
// API key
const APIKEY = 'f2f85762267ef18d0df71e18ec9f3737';
// City
const city = 'Hamburg';
// Units for Farenheit
const units = 'imperial';

// Get 
const tempOfCity = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');

// Weather Data
// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// fetch weather
fetch(url)
  .then(response => response.json())
  .then(weatherData => {
    tempOfCity.textContent = `${weatherData.main.temp}°F`;

    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', weatherData.weather[0].description);
    weatherIcon.style.display = 'inline';
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
    tempOfCity.textContent = "Unable to fetch weather data.";
  });