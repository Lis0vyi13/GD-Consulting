const modal = document.querySelector(".main-success");

modal.addEventListener("click", function (e) {
  if (
    !e.target.closest(".main-success__content") ||
    e.target.hasAttribute("data-close-button")
  ) {
    modal.classList.remove("fadeIn");
    setTimeout(() => {
      modal.classList.remove("_flex");
    }, 200);
    body.classList.remove("lock");
  }
});

export { modal };
