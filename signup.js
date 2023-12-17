import convertEmailErrorMessage from "./email.js";
import convertPasswordErrorMessage from "./password.js";
import convertPasswordCheckErrorMessage from "./passwordCheck.js";

const signUpBtn = document.querySelector(".sumbit-button");
const signForm = document.querySelector(".sign-form");

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#password-check");

const checkInput = (e) => {
  convertEmailErrorMessage(emailInput.value);
  convertPasswordErrorMessage(passwordInput.value);
  convertPasswordCheckErrorMessage(passwordCheckInput.value);

  const errorMessageList = document.querySelectorAll(".error-message");
  if (!errorMessageList.length) {
    signForm.setAttribute("onsubmit", "return true");
  }
};

signForm.setAttribute("onsubmit", "return false");
signUpBtn.addEventListener("click", checkInput);
