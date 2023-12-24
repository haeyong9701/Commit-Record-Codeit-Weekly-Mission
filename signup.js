import {
  validateEmail,
  validatePassword,
  setInputError,
  removeInputError,
  isSamePassword,
  togglePassword,
} from "./utils.js";

import {
  signForm,
  emailInput,
  emailInputBox,
  passwordInputBox,
  passwordInput,
  passwordConfirmInputBox,
  passwordConfirmInput,
  passwordToggleButton,
  confirmPasswordToggleButton,
} from "./tags.js";

const signup = (e) => {
  e.preventDefault();

  validateEmail(emailInput.value, "signup");
  validatePassword(passwordInput.value);
  validateConfirmPassword(passwordConfirmInput.value);

  const errorMessageList = document.querySelectorAll(".error-message");
  if (!errorMessageList.length) {
    location.href = "./folder.html";
  }
};

const validateConfirmPassword = (e) => {
  const inputValue = e.target?.value ?? e;

  if (!isSamePassword(inputValue)) {
    setInputError("비밀번호가 일치하지 않아요.", passwordConfirmInputBox, passwordConfirmInput);
  } else {
    removeInputError(passwordConfirmInputBox, passwordConfirmInput);
  }
};

emailInputBox.addEventListener("focusout", (event) => validateEmail(event, "signup"));
passwordInputBox.addEventListener("focusout", validatePassword);
passwordConfirmInputBox.addEventListener("focusout", validateConfirmPassword);
passwordToggleButton.addEventListener("click", () => togglePassword(passwordInput, passwordToggleButton));
confirmPasswordToggleButton.addEventListener("click", () =>
  togglePassword(passwordConfirmInput, confirmPasswordToggleButton)
);
signForm.addEventListener("submit", signup);

export default signup;
