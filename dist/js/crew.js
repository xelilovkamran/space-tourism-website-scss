import data from "../data.json" assert { type: "json" };

const role = document.querySelector("#crew-members .crew-information h4");
const name = document.querySelector("#crew-members .crew-information h3");
const description = document.querySelector("#crew-members .crew-information p");
const image = document.querySelector("#crew-members .member-image img");
const buttons = document.querySelectorAll("#crew-members .page-buttons div");

const [commander, missionSpecialist, pilot, flightEngineer] = data.crew;

function removeClass(className) {
  buttons.forEach((element) => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  });
}

buttons[0].addEventListener("click", () => {
  role.innerHTML = commander.role;
  name.innerHTML = commander.name;
  description.innerHTML = commander.bio;
  image.src = commander.images.png;
  removeClass("active-button");
  buttons[0].classList.add("active-button");
});

buttons[1].addEventListener("click", () => {
  role.innerHTML = missionSpecialist.role;
  name.innerHTML = missionSpecialist.name;
  description.innerHTML = missionSpecialist.bio;
  image.src = missionSpecialist.images.png;
  removeClass("active-button");
  buttons[1].classList.add("active-button");
});

buttons[2].addEventListener("click", () => {
  role.innerHTML = pilot.role;
  name.innerHTML = pilot.name;
  description.innerHTML = pilot.bio;
  image.src = pilot.images.png;
  removeClass("active-button");
  buttons[2].classList.add("active-button");
});

buttons[3].addEventListener("click", () => {
  role.innerHTML = flightEngineer.role;
  name.innerHTML = flightEngineer.name;
  description.innerHTML = flightEngineer.bio;
  image.src = flightEngineer.images.png;
  removeClass("active-button");
  buttons[3].classList.add("active-button");
});
