import createErrorSpan from "./createErrorSpan.js";
import removeErrorSpan from "./removeErrorSpan.js";

import { passwordCheckInputBox, passwordCheckInput, passwordInput } from "../tags.js";

const isSamePassword = (password) => {
  return passwordInput.value === password;
};

const convertPasswordCheckText = (tag) => {
  tag.textContent = "비밀번호가 일치하지 않아요.";
};

const convertPasswordCheckErrorMessage = (e) => {
  const value = e.target?.value ?? e;

  if (!isSamePassword(value)) {
    createErrorSpan(convertPasswordCheckText, passwordCheckInputBox, passwordCheckInput);
  } else {
    removeErrorSpan(passwordCheckInputBox, passwordCheckInput);
  }
};

passwordCheckInputBox.addEventListener("focusout", convertPasswordCheckErrorMessage);

export default convertPasswordCheckErrorMessage;
