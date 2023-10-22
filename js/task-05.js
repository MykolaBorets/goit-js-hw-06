const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const inputValue = nameInput.value;
  if (inputValue.length > 0) {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});