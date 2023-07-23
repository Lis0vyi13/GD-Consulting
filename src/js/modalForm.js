import { modalSuccess } from "./form.js";
import { toBlackButton } from "./modals.js";
const toFormButtons = document.querySelectorAll("#toForm");
const modalFormBlock = document.querySelector(".modal-form__block");
const modalFormTabsBlock = document.querySelector("#modal-form__tabs");
const modalFormTabs = document.querySelectorAll("#modal-form__tab");
const modalFormInput = document.querySelector("#modal-form__input");
const modalFormHiddenSelect = document.querySelector("#modal-form__hidden-select");
const modalFormArrow = document.querySelector("#modal-form__arrow");
const modalForm = document.querySelector("#modal-form");

function tabsAnimation() {
  setTimeout(() => {
    modalFormTabsBlock.classList.toggle("tabs-animation");
    modalFormArrow.classList.toggle("arrow-animation");
  }, 10);
}

function selectTab(tabText) {
  modalFormHiddenSelect.value = tabText;
}

modalFormBlock.addEventListener("click", function (e) {
  modalForm.addEventListener("submit", function (e) {
    modalFormBlock.classList.remove("_flex");
    modalFormBlock.classList.remove("fadeIn");
    modalFormBlock.classList.add("hide");
    toBlackButton();

    e.preventDefault();
    modalSuccess.classList.add("_flex");
    setTimeout(() => {
      modalSuccess.classList.add("fadeIn");
    }, 10);
    if (modalSuccess.classList.contains("_flex")) {
      document.body.style.overflow = "hidden";
    }
  });
});

document.addEventListener("click", function (e) {
  if (e.target.closest("#modal-form__tabs-block")) {
    if (modalFormTabs.length > 3) {
      modalFormTabsBlock.style.overflowY = "scroll";
    }
    if (!modalFormTabsBlock.classList.contains("show")) {
      modalFormTabsBlock.classList.toggle("show");
      tabsAnimation();
    } else {
      tabsAnimation();
      setTimeout(() => {
        modalFormTabsBlock.classList.toggle("show");
      }, 300);
    }
  }
  modalFormTabs.forEach(function (tab) {
    if (e.target === tab) {
      modalFormInput.value = tab.textContent;
      modalFormInput.style.color = "#000";
      selectTab(tab.textContent);
    }
  });
});

toFormButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    modalFormBlock.classList.add("_flex");
    setTimeout(() => {
      modalFormBlock.classList.add("fadeIn");
    }, 10);
    if (modalFormBlock.classList.contains("_flex")) {
      document.body.style.overflow = "hidden";
    }
  });
});
