import validateEmail from "./functions/email.js";
import validatePassword from "./functions/password.js";

import { emailInput, passwordInput, signForm } from "./tags.js";

const signin = (e) => {
  e.preventDefault();

  const userEmail = "test@codeit.com";
  const userPassword = "codeit101";

  if (userEmail === emailInput.value && userPassword === passwordInput.value) {
    location.href = "./folder.html";
  } else {
    validateEmail(emailInput.value, "signin");
    validatePassword(passwordInput.value, "signin");
  }
};

signForm.addEventListener("submit", signin);

export default signin;
