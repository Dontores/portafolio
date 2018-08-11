const btnMenu = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const brandImage = document.querySelector(".brand-image");

let showMenu = false;

btnMenu.addEventListener("click", toggle);

function toggle() {
  if (!showMenu) {
    btnMenu.classList.add("close");
    menu.classList.add("show");
    navMenu.classList.add("show");
    brandImage.classList.add("show");
    navItems.forEach(navItem => navItem.classList.add("show"));

    showMenu = true;
  } else {
    btnMenu.classList.remove("close");
    menu.classList.remove("show");
    navMenu.classList.remove("show");
    brandImage.classList.remove("show");
    navItems.forEach(navItem => navItem.classList.remove("show"));

    showMenu = false;
  }
}
