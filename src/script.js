//New York
function updateLosAngelesTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  newYorkDateElement.innerHTML = moment().format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A<[/small>]");
}

setInterval(updateLosAngelesTime, 1000);

//Paris
function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A<[/small>]");
}

setInterval(updateParisTime, 1000);

function updateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone).format("h:mm:ss [<small>]A<[/small>]");
  let date = moment().tz(timeZone).format("MMMM Do YYYY");
  let displayedCityElement = document.querySelector("#cities");
  displayedCityElement.innerHTML = `
    <div class="city">
     <div>
    <h2>${cityName}</h2>
    <div class="date">${date}</div>
    </div>
    <div class="time"> ${cityTime}</div>
    </div>
    <a href="index.html">All cities</a>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
