const requestOptionsBlock = document.querySelector(
  ".work-together__form-input.relative select"
);

const requestArrow = document.querySelector(".request-arrow");

function tabsAnimation() {
  requestArrow.classList.toggle("arrow-animation");
}

document.addEventListener("click", function (e) {
  if (e.target.closest(".work-together__form-input.relative")) {
    tabsAnimation();
  } else if (
    requestArrow.classList.contains("arrow-animation") &&
    !e.target.closest(".work-together__form-input.relative")
  ) {
    tabsAnimation();
  }
});
