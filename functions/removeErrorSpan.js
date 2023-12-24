const removeErrorSpan = (inputBox, input) => {
  if (inputBox.lastElementChild.className === "error-message") {
    inputBox.lastElementChild.remove();
    input.classList.remove("error-box");
  }
};

export default removeErrorSpan;
