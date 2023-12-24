const emailInput = document.querySelector("#email");
const emailInputBox = document.querySelector(".sign-input-box");

const passwordInput = document.querySelector("#password");
const passwordInputBox = document.querySelector(".sign-input-box.sign-password");

const passwordCheckInput = document.querySelector("#password-check");
const passwordCheckInputBox = document.querySelectorAll(".sign-input-box.sign-password")[1];

const signForm = document.querySelector(".sign-form");

export {
  emailInput,
  emailInputBox,
  passwordInput,
  passwordInputBox,
  passwordCheckInput,
  passwordCheckInputBox,
  signForm,
};
