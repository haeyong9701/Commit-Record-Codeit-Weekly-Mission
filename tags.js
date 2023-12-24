const signForm = document.querySelector(".sign-form");

const emailInputBox = document.querySelector(".sign-input-box");
const emailInput = document.querySelector("#email");

const passwordInputBox = document.querySelector(".sign-input-box.sign-password");
const passwordInput = document.querySelector("#password");

const passwordConfirmInputBox = document.querySelectorAll(".sign-input-box.sign-password")[1];
const passwordConfirmInput = document.querySelector("#password-confirm");

export {
  signForm,
  emailInputBox,
  emailInput,
  passwordInputBox,
  passwordInput,
  passwordConfirmInputBox,
  passwordConfirmInput,
};
