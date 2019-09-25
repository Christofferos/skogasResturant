// Select DOM Items
const pizza = document.querySelector(".pizza");
const hamburgare = document.querySelector(".hamburgare");
const wraps = document.querySelector(".wraps");
const korv = document.querySelector(".korv");
const kebab = document.querySelector(".kebab");

if (window.location.search.indexOf("pizza") > -1) {
  hamburgare.style.display = "none";
  wraps.style.display = "none";
  korv.style.display = "none";
  kebab.style.display = "none";
} else if (window.location.search.indexOf("hamburgare") > -1) {
  pizza.style.display = "none";
  wraps.style.display = "none";
  korv.style.display = "none";
  kebab.style.display = "none";
} else if (window.location.search.indexOf("wraps") > -1) {
  pizza.style.display = "none";
  hamburgare.style.display = "none";
  korv.style.display = "none";
  kebab.style.display = "none";
} else if (window.location.search.indexOf("korv") > -1) {
  pizza.style.display = "none";
  hamburgare.style.display = "none";
  wraps.style.display = "none";
  kebab.style.display = "none";
} else if (window.location.search.indexOf("kebab") > -1) {
  pizza.style.display = "none";
  hamburgare.style.display = "none";
  wraps.style.display = "none";
  korv.style.display = "none";
}
