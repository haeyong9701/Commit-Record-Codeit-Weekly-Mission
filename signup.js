import convertEmailErrorMessage from "./functions/email.js";
import convertPasswordErrorMessage from "./functions/password.js";
import convertPasswordCheckErrorMessage from "./functions/passwordCheck.js";

import { signForm, emailInput, passwordInput, passwordCheckInput } from "./tags.js";

const signUp = (e) => {
  e.preventDefault();

  convertEmailErrorMessage(emailInput.value);
  convertPasswordErrorMessage(passwordInput.value);
  convertPasswordCheckErrorMessage(passwordCheckInput.value);

  const errorMessageList = document.querySelectorAll(".error-message");
  if (!errorMessageList.length) {
    location.href = "./folder.html";
  }
};

signForm.addEventListener("submit", signUp);

export default signUp;
