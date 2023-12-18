import convertEmailErrorMessage from "./functions/email.js";
import convertPasswordErrorMessage from "./functions/password.js";

import { emailInput, passwordInput, signForm } from "./tags.js";

const signin = (e) => {
  e.preventDefault();

  const userEmail = "test@codeit.com";
  const userPassword = "codeit101";

  if (userEmail === emailInput.value && userPassword === passwordInput.value) {
    location.href = "./folder.html";
  } else {
    convertEmailErrorMessage(emailInput.value, "signIn");
    convertPasswordErrorMessage(passwordInput.value, "signIn");
  }
};

signForm.addEventListener("submit", signin);

export default signin;
