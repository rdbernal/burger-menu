const main = document.querySelector("main");
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".bar");

function burgerAnimation() {
  lines.forEach((element) => {
    element.classList.toggle("active");
  });
  main.classList.toggle("main-active");
  menu.classList.toggle("menu-active");
}

menu.addEventListener("click", burgerAnimation);
