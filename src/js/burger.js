const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".menu_link");
const logo = document.querySelector("#logo");
const blur = document.querySelector(".blur");

function toggle(elem, selector = "active") {
  elem.classList.toggle(selector);
}

function toggleElements() {
  toggle(burger);
  toggle(menu);
  toggle(body, "lock");
  toggle(blur, "show");
}

burger.addEventListener("click", function (e) {
  toggleElements();
});

document.addEventListener("click", (e) => {
  let target = e.target;
  if (menu.classList.contains("active")) {
    menuLinks.forEach((item) => {
      if (target === item || target === logo || !target.closest(".header")) {
        toggleElements();
      }
    });
  }
});
