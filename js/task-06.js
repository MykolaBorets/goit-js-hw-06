const inputElement = document.querySelector("#validation-input");
const desiredLength = document.querySelector('input[data-length="6"]');

inputElement.addEventListener("blur", (event) => {
  const inputValuedLength = event.currentTarget.value.length;
  const dataLength = Number(inputElement.dataset.length);

  if (inputValuedLength === dataLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
