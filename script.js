const apiKey = "e7e55771f9b815c9b8fa9f38416b55a4"; // openwether
// const apiKey = "bac594f927a1693759b6a232708cb672"; //weather stack api
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"; //open Weather api
// const apiUrl = "http://api.weatherstack.com/current?&units=m";

const searchVal = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather_icon").value;
const btn = document.querySelector(".search button");

async function weather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`); // open weather api rule
  //   const response = await fetch(
  //     apiUrl + `&query=${city}` + `&access_key=${apiKey}`
  //   );
  var data = response.json();
  //   var current = response.json();
  //   console.log(current);
  // change if city name is valid or if invalid present the error
  if (response.status == 404) {
    //if incorrect data then change the weather to display the error and hide the weather details
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    //openweather api data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "<sup> &#8451</sup>";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    //weatherstack api data fetch
    // document.querySelector(".city").innerHTML = current.location.name;
    // document.querySelector(".temp").innerHTML =
    //   Math.round(current.temperature) + "<sup> &#8451</sup>";
    // document.querySelector(".humidity").innerHTML = current.humidity + "%";
    // document.querySelector(".wind").innerHTML = current.wind_speed + "km/h";

    // to change the images according to the data
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "rain") {
      weatherIcon.src = "images/rain.png";
    }

    //if correct data then change the weather to display the details and hide the error text
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", () => {
  weather(searchVal.value);
});
