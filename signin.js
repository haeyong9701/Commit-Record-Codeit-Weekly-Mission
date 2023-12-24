import { TEST_USER, validateEmail, validatePassword, togglePassword } from "./utils.js";
import { signForm, emailInputBox, emailInput, passwordInputBox, passwordInput, passwordToggleButton } from "./tags.js";

const signin = (e) => {
  e.preventDefault();

  if (TEST_USER.email === emailInput.value && TEST_USER.password === passwordInput.value) {
    location.href = "./folder.html";
  } else {
    validateEmail(emailInput.value, "signin");
    validatePassword(passwordInput.value, "signin");
  }
};

emailInputBox.addEventListener("focusout", validateEmail);
passwordInputBox.addEventListener("focusout", validatePassword);
passwordToggleButton.addEventListener("click", () => togglePassword(passwordInput, passwordToggleButton));
signForm.addEventListener("submit", signin);

export default signin;
