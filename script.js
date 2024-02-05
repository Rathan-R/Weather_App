const apiKey = "abd5503bcaf16d4975647c4a8f3c4492";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

    if (data.weather[0].main.toLowerCase() == "clouds") {
      weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main.toLowerCase() == "mist") {
      weatherIcon.src = "mist.png";
    } else if (data.weather[0].main.toLowerCase() == "clear") {
      weatherIcon.src = "clear.png";
    } else if (data.weather[0].main.toLowerCase() == "rain") {
      weatherIcon.src = "rain.png";
    } else if (data.weather[0].main.toLowerCase() == "snow") {
      weatherIcon.src = "snow.png";
    } else if (data.weather[0].main.toLowerCase() == "drizzle") {
      weatherIcon.src = "drizzle.png";
    }

    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
