import convertEmailErrorMessage from "./email.js";
import convertPasswordErrorMessage from "./password.js";

const emailInputBox = document.querySelector(".sign-input-box");
const emailInput = document.querySelector("#email");
const passwordInputBox = document.querySelector(".sign-input-box.sign-password");
const passwordInput = document.querySelector("#password");
const signForm = document.querySelector(".sign-form");
const signInBtn = document.querySelector(".sumbit-button");

const login = () => {
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
signInBtn.addEventListener("click", login);
