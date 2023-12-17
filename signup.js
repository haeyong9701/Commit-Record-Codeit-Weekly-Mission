import convertEmailErrorMessage from "./functions/email.js";
import convertPasswordErrorMessage from "./functions/password.js";
import convertPasswordCheckErrorMessage from "./functions/passwordCheck.js";

import { signUpBtn, signForm, emailInput, passwordInput, passwordCheckInput } from "./tags.js";

const signUp = () => {
  convertEmailErrorMessage(emailInput.value, "signUp");
  convertPasswordErrorMessage(passwordInput.value);
  convertPasswordCheckErrorMessage(passwordCheckInput.value);

  const errorMessageList = document.querySelectorAll(".error-message");
  if (!errorMessageList.length) {
    signForm.setAttribute("onsubmit", "return true");
  }
};

signForm.setAttribute("onsubmit", "return false");
signUpBtn.addEventListener("click", signUp);

export default signUp;
