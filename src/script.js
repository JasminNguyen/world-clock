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
