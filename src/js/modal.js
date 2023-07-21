const modal = document.querySelector(".main-success");

modal.addEventListener("click", function (e) {
  if (
    !e.target.closest(".main-success__content") ||
    e.target.hasAttribute("data-close-button") ||
    e.target.closest(".main-success__return-button")
  ) {
    modal.classList.remove("fadeIn");

    body.style.overflow = "auto";
    setTimeout(() => {
      modal.classList.remove("_flex");
    }, 200);
  }
});

export { modal };
