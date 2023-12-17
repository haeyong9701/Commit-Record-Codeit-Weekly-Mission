const createErrorSpan = (convertText, inputBox, input) => {
  if (inputBox.lastElementChild.tagName === "SPAN") {
    const errorSpan = inputBox.lastElementChild;
    convertText(errorSpan);
  } else {
    const span = document.createElement("span");
    span.classList.add("error-message");
    input.classList.add("error-box");
    convertText(span);
    inputBox.append(span);
  }
};

export default createErrorSpan;
