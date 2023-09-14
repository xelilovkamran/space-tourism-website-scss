const navBar = document.querySelector("nav");
const hamburgerMenu = document.querySelector("i");

if (window.innerWidth < 580) {
  navBar.style.height = `${document.body.clientHeight}px`;
}

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("fa-bars")) {
    navBar.style.display = "block";
    hamburgerMenu.classList.replace("fa-bars", "fa-xmark");
  } else {
    navBar.style.display = "none";
    hamburgerMenu.classList.replace("fa-xmark", "fa-bars");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 580) {
    navBar.style.height = `${document.body.clientHeight}px`;
  } else {
    navBar.style.height = "";
  }

  if (window.innerWidth > 580) {
    navBar.style.display = "block";
  } else if (
    window.innerWidth <= 580 &&
    hamburgerMenu.classList.contains("fa-bars")
  ) {
    navBar.style.display = "none";
  }
});
