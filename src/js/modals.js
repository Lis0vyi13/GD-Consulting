const modalSendButton = document.querySelector(".modal-success button#requests__submit-button");
const modals = document.querySelectorAll("#modal");
let timeout;
function toBlackButton() {
  modalSendButton.style.setProperty("--top-value", "100px");
  modalSendButton.style.pointerEvents = "auto";
  modalSendButton.classList.add("_black-button");
}

modals.forEach(function (modal) {
  modal.addEventListener("click", function (e) {
    if (
      !e.target.closest(".modal-success__content") ||
      e.target.hasAttribute("data-close-button") ||
      e.target.closest(".modal-success__return-button")
    ) {
      modal.classList.remove("fadeIn");
      document.body.style.overflow = "auto";
      setTimeout(() => {
        modal.classList.remove("_flex");
        toBlackButton();
      }, 200);
    }
  });
});

modalSendButton.addEventListener("click", function () {
  //white
  if (modalSendButton.classList.contains("_black-button")) {
    modalSendButton.style.setProperty("--top-value", "0px");
    modalSendButton.style.pointerEvents = "none";
    modalSendButton.classList.remove("_black-button");
    clearTimeout(timeout);
    //black
    timeout = setTimeout(() => {
      toBlackButton();
    }, 10000);
  }
});

export { toBlackButton };
