const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", function (e) {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
