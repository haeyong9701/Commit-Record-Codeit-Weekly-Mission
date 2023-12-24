import { setInputError } from "../utils.js";
import removeErrorSpan from "./removeErrorSpan.js";

import { passwordCheckInputBox, passwordCheckInput, passwordInput } from "../tags.js";

const isSamePassword = (password) => {
  return passwordInput.value === password;
};

const validateConfirmPassword = (e) => {
  const value = e.target?.value ?? e;

  if (!isSamePassword(value)) {
    setInputError("비밀번호가 일치하지 않아요.", passwordCheckInputBox, passwordCheckInput);
  } else {
    removeErrorSpan(passwordCheckInputBox, passwordCheckInput);
  }
};

passwordCheckInputBox.addEventListener("focusout", validateConfirmPassword);

export default validateConfirmPassword;
