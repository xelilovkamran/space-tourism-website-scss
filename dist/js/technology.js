import data from "../data.json" with{ type: "json" };

const buttons = document.querySelectorAll(".page-buttons > div");

const heading = document.querySelector(".technology-details h3");
const information = document.querySelector(".technology-details p");
const img = document.querySelector("#technology-information .image");

const [first, second, third] = buttons;

const [launchVehicle, spaceport, spaceCapsule] = data.technology;

const responsiveBreakpoint = 840;

function removeClass(className) {
    buttons.forEach((button) => {
        if (button.classList.contains(className)) {
            button.classList.remove(className);
        }
    });
}

if (window.innerWidth > responsiveBreakpoint) {
    img.src = launchVehicle.images.portrait;
} else {
    img.src = launchVehicle.images.landscape;
}

first.addEventListener("click", () => {
    heading.innerHTML = launchVehicle.name;
    information.innerHTML = launchVehicle.description;
    if (window.innerWidth > responsiveBreakpoint) {
        img.src = launchVehicle.images.portrait;
    } else {
        img.src = launchVehicle.images.landscape;
    }
    removeClass("active-button");
    first.classList.add("active-button");
});

second.addEventListener("click", () => {
    heading.innerHTML = spaceport.name;
    information.innerHTML = spaceport.description;
    if (window.innerWidth > responsiveBreakpoint) {
        img.src = spaceport.images.portrait;
    } else {
        img.src = spaceport.images.landscape;
    }
    removeClass("active-button");
    second.classList.add("active-button");
});

third.addEventListener("click", () => {
    heading.innerHTML = spaceCapsule.name;
    information.innerHTML = spaceCapsule.description;
    if (window.innerWidth > responsiveBreakpoint) {
        img.src = spaceCapsule.images.portrait;
    } else {
        img.src = spaceCapsule.images.landscape;
    }
    removeClass("active-button");
    third.classList.add("active-button");
});

window.addEventListener("resize", () => {
    let selectedTechnology;

    if (document.querySelector(".active-button") === first) {
        selectedTechnology = launchVehicle;
    } else if (document.querySelector(".active-button") === second) {
        selectedTechnology = spaceport;
    } else {
        selectedTechnology = spaceCapsule;
    }

    if (window.innerWidth > responsiveBreakpoint) {
        img.src = selectedTechnology.images.portrait;
    } else {
        img.src = selectedTechnology.images.landscape;
    }
});
