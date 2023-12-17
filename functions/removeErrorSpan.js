const removeErrorSpan = (inputBox, input) => {
  if (inputBox.lastElementChild.tagName === "SPAN") {
    inputBox.lastElementChild.remove();
    input.classList.remove("error-box");
  }
};

export default removeErrorSpan;
