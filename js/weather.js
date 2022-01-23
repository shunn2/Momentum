const API_KEY = "2fdf7fd1406ffe47f269c5fbec7b7d70";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}
function onGeoErr() {
  alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
