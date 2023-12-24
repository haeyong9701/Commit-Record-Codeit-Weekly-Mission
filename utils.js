export const setInputError = (message, inputBox, input) => {
  console.log(inputBox.lastElementChild.className);
  if (inputBox.lastElementChild.className === "error-message") {
    const errorSpan = inputBox.lastElementChild;
    errorSpan.textContent = message;
  } else {
    const span = document.createElement("span");
    span.classList.add("error-message");
    input.classList.add("error-box");
    span.textContent = message;
    inputBox.append(span);
  }
};

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};
