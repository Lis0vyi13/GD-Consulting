const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const logo = document.querySelector("#logo");
const blur = document.querySelector(".blur");
const line = document.querySelector(".line");
const menuList = document.querySelector(".menu__list");

function toggle(elem, selector = "active") {
  elem.classList.toggle(selector);
}

function toggleElements() {
  toggle(burger);
  toggle(menu);
  toggle(document.body, "lock");
  toggle(blur, "show");
}

function addStyleToLine() {
  return (line.style.height =
    window.innerWidth > 638 && window.innerWidth < 768 && menu.classList.contains("active")
      ? menuList.clientHeight - 25 + "px"
      : "unset");
}
burger.addEventListener("click", function (e) {
  toggleElements();
  addStyleToLine();
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

function resetElements() {
  if (window.innerWidth > 1199) {
    burger.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("lock");
    blur.classList.remove("show");
  }

  addStyleToLine();
}

window.addEventListener("resize", resetElements);
