import validateEmail from "./functions/email.js";
import validatePassword from "./functions/password.js";
import validateConfirmPassword from "./functions/passwordCheck.js";

import { signForm, emailInput, passwordInput, passwordCheckInput } from "./tags.js";

const signup = (e) => {
  e.preventDefault();

  validateEmail(emailInput.value);
  validatePassword(passwordInput.value);
  validateConfirmPassword(passwordCheckInput.value);

  const errorMessageList = document.querySelectorAll(".error-message");
  if (!errorMessageList.length) {
    location.href = "./folder.html";
  }
};

signForm.addEventListener("submit", signup);

export default signup;
