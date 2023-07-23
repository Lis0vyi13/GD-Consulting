const modalSuccess = document.querySelector(".modal-success");
const inputRequest = document.querySelector(".work-together__form-input.relative input");
const requestOptionsBlock = document.querySelector(".work-together__form-options");
const tabs = document.querySelectorAll("#modal-success__tab");
const requestArrow = document.querySelector(".request-arrow");
const hiddenSelect = document.getElementById("hiddenSelect");
const form = document.querySelector(".work-together__form");

function tabsAnimation() {
  setTimeout(() => {
    requestOptionsBlock.classList.toggle("tabs-animation");
    requestArrow.classList.toggle("arrow-animation");
  }, 10);
}

function selectTab(tabText) {
  hiddenSelect.value = tabText;
}

document.addEventListener("click", function (e) {
  if (e.target.closest(".work-together__form-input.relative")) {
    if (tabs.length > 3) {
      requestOptionsBlock.style.overflowY = "scroll";
    }
    if (!requestOptionsBlock.classList.contains("show")) {
      requestOptionsBlock.classList.toggle("show");
      tabsAnimation();
    } else {
      tabsAnimation();
      setTimeout(() => {
        requestOptionsBlock.classList.toggle("show");
      }, 300);
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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  modalSuccess.classList.add("_flex");
  setTimeout(() => {
    modalSuccess.classList.add("fadeIn");
  }, 10);
  if (modalSuccess.classList.contains("_flex")) {
    document.body.style.overflow = "hidden";
  }
});

export { modalSuccess };
