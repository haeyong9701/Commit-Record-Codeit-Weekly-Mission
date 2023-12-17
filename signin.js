import convertEmailErrorMessage from "./functions/email.js";
import convertPasswordErrorMessage from "./functions/password.js";

import { emailInput, passwordInput, signForm, signInBtn } from "./tags.js";

const signin = () => {
  const userEmail = "test@codeit.com";
  const userPassword = "codeit101";

  if (userEmail === emailInput.value && userPassword === passwordInput.value) {
    signForm.setAttribute("onsubmit", "return true");
  } else {
    convertEmailErrorMessage(emailInput.value, "signIn");
    convertPasswordErrorMessage(passwordInput.value, "signIn");
  }
};

signForm.setAttribute("onsubmit", "return false");
signInBtn.addEventListener("click", signin);

export default signin;
