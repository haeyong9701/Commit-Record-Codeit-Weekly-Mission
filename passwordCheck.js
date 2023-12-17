const passwordCheckInputBox = document.querySelectorAll(".sign-input-box.sign-password")[1];
const passwordCheckInput = document.querySelector("#password-check");

const passwordInput = document.querySelector("#password");

const createErrorSpan = (convertText) => {
  if (passwordCheckInputBox.lastElementChild.tagName === "SPAN") {
    const errorSpan = passwordCheckInputBox.lastElementChild;
    convertText(errorSpan);
  } else {
    const span = document.createElement("span");
    span.classList.add("error-message");
    passwordCheckInput.classList.add("error-box");
    convertText(span);
    passwordCheckInputBox.append(span);
  }
};

const removeErrorSpan = () => {
  if (passwordCheckInputBox.lastElementChild.tagName === "SPAN") {
    passwordCheckInputBox.lastElementChild.remove();
    passwordCheckInput.classList.remove("error-box");
  }
};

const isSamePassword = (password) => {
  return passwordInput.value === password;
};

const convertPasswordCheckText = (tag) => {
  tag.textContent = "비밀번호가 일치하지 않아요.";
};

const convertPasswordCheckErrorMessage = (e) => {
  const value = e.target?.value ?? e;

  if (!isSamePassword(value)) {
    createErrorSpan(convertPasswordCheckText);
  } else {
    removeErrorSpan();
  }
};

passwordCheckInputBox.addEventListener("focusout", convertPasswordCheckErrorMessage);

export default convertPasswordCheckErrorMessage;
