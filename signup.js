import { validateEmail, validatePassword, setInputError, removeInputError, isSamePassword } from "./utils.js";

import {
  signForm,
  emailInput,
  passwordInputBox,
  passwordInput,
  passwordConfirmInputBox,
  passwordConfirmInput,
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

passwordInputBox.addEventListener("focusout", validatePassword);
passwordConfirmInputBox.addEventListener("focusout", validateConfirmPassword);
signForm.addEventListener("submit", signup);

export default signup;
