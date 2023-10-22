const setFontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

setFontSize.addEventListener("input", () => {
  text.style.fontSize = setFontSize.value + "px";
});
