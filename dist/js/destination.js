import data from "../data.json" with { type: "json" };

const planets = document.querySelectorAll(".planet-list li");
const [moon, mars, europa, titan] = planets;

const planetName = document.querySelector(".planet-information h2");
const planetDescription = document.querySelector(".planet-information p");
const time = document.querySelector(".distance-time .time span");
const distance = document.querySelector(".distance-time .distance span");
const image = document.querySelector("#planet-destination img");

const [moonInformation, marsInformation, europaInformation, titanInformation] =
  data.destinations;

function removeClass(className) {
  planets.forEach((planet) => {
    if (planet.classList.contains(className)) {
      planet.classList.remove(className);
    }
  });
}

moon.addEventListener("click", () => {
  planetName.innerHTML = moonInformation.name.toUpperCase();
  planetDescription.innerHTML = moonInformation.description;
  time.innerHTML = moonInformation.travel;
  distance.innerHTML = moonInformation.distance;
  image.src = moonInformation.images.png;
  removeClass("active");
  moon.classList.add("active");
});

mars.addEventListener("click", () => {
  planetName.innerHTML = marsInformation.name.toUpperCase();
  planetDescription.innerHTML = marsInformation.description;
  time.innerHTML = marsInformation.travel;
  distance.innerHTML = marsInformation.distance;
  image.src = marsInformation.images.png;
  removeClass("active");
  mars.classList.add("active");
});

europa.addEventListener("click", () => {
  planetName.innerHTML = europaInformation.name.toUpperCase();
  planetDescription.innerHTML = europaInformation.description;
  time.innerHTML = europaInformation.travel;
  distance.innerHTML = europaInformation.distance;
  image.src = europaInformation.images.png;
  removeClass("active");
  europa.classList.add("active");
});

titan.addEventListener("click", () => {
  planetName.innerHTML = titanInformation.name.toUpperCase();
  planetDescription.innerHTML = titanInformation.description;
  time.innerHTML = titanInformation.travel;
  distance.innerHTML = titanInformation.distance;
  image.src = titanInformation.images.png;
  removeClass("active");
  titan.classList.add("active");
});
