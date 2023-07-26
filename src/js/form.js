const modalSuccess = document.querySelector(".modal-success");
const inputRequest = document.querySelector(".work-together__form-input.relative input");
const requestOptionsBlock = document.querySelector(".work-together__form-options");
const tabs = document.querySelectorAll("#modal-success__tab");
const requestArrow = document.querySelector(".request-arrow");
const hiddenSelect = document.getElementById("hiddenSelect");
const form = document.querySelector(".work-together__form");
const loader = document.querySelector(".lds-dual-ring");

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
  const promise1 = new Promise((resolve, reject) => {
    loader.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";

    setTimeout(() => {
      resolve(() => {
        loader.classList.add("fadeIn");
      });
    }, 10);
  });

  promise1.then(() => {
    setTimeout(() => {
      loader.classList.add("hide");
      loader.classList.remove("show");
      modalSuccess.classList.add("_flex");
      document.querySelector("body").style.overflow = "auto";
      setTimeout(() => {
        modalSuccess.classList.add("fadeIn");
        form.reset();
        inputRequest.style = "";
        inputRequest.value = "What is your request?";
      }, 100);
      if (modalSuccess.classList.contains("_flex")) {
        document.body.style.overflow = "hidden";
      }
    }, 1000);
  });
});

export { modalSuccess, loader };
