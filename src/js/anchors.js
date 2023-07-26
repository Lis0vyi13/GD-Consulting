const satisfiedClientsBlock = document.querySelector(".satisfied-clients");
const toSatisfiedClientsElement = document.querySelector("#toSatisfiedClients");
const toWhatWeDoElement = document.querySelector("#toWhatWeDo");
const whatWeDo = document.querySelector(".what-we-do");

function moveto(startElement, anchor, ...rest) {
  startElement.addEventListener("click", function (e) {
    e.preventDefault();
    let navHeight = document.querySelector(".nav").clientHeight;
    let elemRect = anchor.getBoundingClientRect();

    let value = elemRect.top;
    if (rest.length > 0) {
      for (const args of rest) {
        value += args.offsetTop;
      }
    }
    let maxScrollValue = document.documentElement.scrollHeight - window.innerHeight;

    value = Math.min(value + window.scrollY - navHeight - 100, maxScrollValue);

    window.scrollTo({ top: value });
  });
}

moveto(toSatisfiedClientsElement, satisfiedClientsBlock);
moveto(toWhatWeDoElement, whatWeDo, document.querySelector("#what-we-do__anchor"));
