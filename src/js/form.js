const inputRequest = document.querySelector(
  ".work-together__form-input.relative input"
);
const requestOptionsBlock = document.querySelector(
  ".work-together__form-options"
);
const tabs = document.querySelectorAll(
  ".work-together__form-option a.medium_p_font"
);
const workTogetherForm = document.querySelector(".work-together__form");
const requestArrow = document.querySelector(".request-arrow");
const requestSubmitButton = document.querySelector("#requests__submit-button");
const hiddenInput = document.getElementById("hiddenInput");

function tabsAnimation() {
  setTimeout(() => {
    requestOptionsBlock.classList.toggle("tabs-animation");
    requestArrow.classList.toggle("arrow-animation");
  }, 10);

  if (requestOptionsBlock.style.overflowY === "auto") {
    requestOptionsBlock.style.overflowY = "hidden";
  } else {
    setTimeout(() => {
      requestOptionsBlock.style.overflowY = "auto";
    }, 1000);
  }
}

function selectTab(tabText) {
  hiddenInput.value = tabText;
}

document.addEventListener("click", function (e) {
  if (e.target.closest(".work-together__form-input.relative")) {
    if (!requestOptionsBlock.classList.contains("show")) {
      requestOptionsBlock.classList.toggle("show");
      tabsAnimation();
    } else {
      tabsAnimation();
      setTimeout(() => {
        requestOptionsBlock.classList.toggle("show");
      }, 200);
    }
  }
  tabs.forEach(function (tab) {
    if (e.target === tab) {
      inputRequest.value = tab.textContent;
      inputRequest.style.color = "#000";
      selectTab(tab.textContent);
    }
  });
});
