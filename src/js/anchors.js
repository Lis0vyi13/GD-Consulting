const satisfiedClientsBlock = document.getElementById("satisfied-clients");
const heightFromTop = satisfiedClientsBlock.offsetTop;
const toSatisfiedClientsElement = document.querySelector("#toSatisfiedClients");
const toWhatWeDoElement = document.querySelector("#toWhatWeDo");
const whatWeDoHeight = document.querySelector(".what-we-do").offsetTop;

function moveto(element, value) {
  element.addEventListener("click", function (e) {
    window.scrollTo({ top: value });
  });
}

moveto(toSatisfiedClientsElement, heightFromTop - 150);
moveto(toWhatWeDo, whatWeDoHeight - 150);
