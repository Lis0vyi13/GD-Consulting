const modal = document.querySelector(".main-success");
const modalSendButton = document.querySelector(".main-success button#requests__submit-button");

modal.addEventListener("click", function (e) {
  if (
    !e.target.closest(".main-success__content") ||
    e.target.hasAttribute("data-close-button") ||
    e.target.closest(".main-success__return-button")
  ) {
    modal.classList.remove("fadeIn");

    document.body.style.overflow = "auto";
    setTimeout(() => {
      modal.classList.remove("_flex");
    }, 200);
  }
});
modalSendButton.addEventListener("click", function () {
  if (modalSendButton.classList.contains("_black-button")) {
    modalSendButton.style.setProperty("--top-value", "0px");
    modalSendButton.style.pointerEvents = "none";
    modalSendButton.classList.remove("_black-button");
    setTimeout(() => {
      modalSendButton.style.setProperty("--top-value", "100px");
      modalSendButton.style.pointerEvents = "auto";

      modalSendButton.classList.add("_black-button");
    }, 10000);
  }
});

export { modal };
