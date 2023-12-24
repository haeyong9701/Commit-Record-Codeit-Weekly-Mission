const signForm = document.querySelector(".sign-form");

const emailInputBox = document.querySelector(".sign-input-box");
const emailInput = document.querySelector("#email");

const passwordInputBox = document.querySelector(".sign-input-box.sign-password");
const passwordInput = document.querySelector("#password");

const passwordConfirmInputBox = document.querySelectorAll(".sign-input-box.sign-password")[1];
const passwordConfirmInput = document.querySelector("#confirm-password");

const passwordToggleButton = document.querySelector("#password-toggle");
const confirmPasswordToggleButton = document.querySelector("#confirm-password-toggle");

export {
  signForm,
  emailInputBox,
  emailInput,
  passwordInputBox,
  passwordInput,
  passwordConfirmInputBox,
  passwordConfirmInput,
  passwordToggleButton,
  confirmPasswordToggleButton,
};
