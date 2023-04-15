const apiKey = "e7e55771f9b815c9b8fa9f38416b55a4"; // openwether
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"; //open Weather api

const searchVal = document.querySelector(".search input");
let weatherIcon = document.getElementById(changeIcon);
const btn = document.querySelector(".search button");

async function weather(city) {
  let response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`, {
    origin: "cros",
  }); // open weather api rule
  var data = await response.json();
  // console.log(data);
  console.log(data.weather[0].main);

  // change if city name is valid or if invalid present the error
  if (response.status == 404) {
    //if incorrect data then change the weather to display the error and hide the weather details
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    // openweather api data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      data.main["temp"] + "<sup> &#8451</sup>";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    // weatherIcon.src = data.weather[0].main;

    // to change the images according to the data

    // const icon = data.weather[0].main;
    // if (icon == "Haze") {
    //   weatherIcon.src == "images/snow.png";
    // } else if (icon == "Clear") {
    //   weatherIcon.src = "images/clear.png";
    // } else if (icon == ["Clouds"]) {
    //   weatherIcon.src = "images/drizzle.png";
    //   console.log(weatherIcon.src);
    // } else if (icon == "Mist") {
    //   weatherIcon.src = ".images/mist.png";
    // } else if (icon == "Snow") {
    //   weatherIcon.src = "images/snow.png";
    // } else if (icon == "Rain") {
    //   weatherIcon.src = "images/rain.png";
    // }

    //if correct data then change the weather to display the details and hide the error text
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  weather(searchVal.value);
});
