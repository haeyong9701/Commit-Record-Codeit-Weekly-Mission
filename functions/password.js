import createErrorSpan from "./createErrorSpan.js";
import removeErrorSpan from "./removeErrorSpan.js";

import { passwordInputBox, passwordInput } from "../tags.js";

const isPassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

const convertIncorrectPasswordText = (tag) => {
  tag.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
};

const convertCheckPassword = (tag) => {
  tag.textContent = "비밀번호를 확인해주세요.";
};

const convertEmptyPasswordText = (tag) => {
  tag.textContent = "비밀번호를 입력해주세요.";
};

const convertPasswordErrorMessage = (e, isSign) => {
  const usedPassword = "codeit101";
  const value = e.target?.value ?? e;

  if (!value) {
    createErrorSpan(convertEmptyPasswordText, passwordInputBox, passwordInput);
  } else if (!isPassword(value)) {
    createErrorSpan(convertIncorrectPasswordText, passwordInputBox, passwordInput);
  } else if (value !== usedPassword && isSign === "signIn") {
    createErrorSpan(convertCheckPassword, passwordInputBox, passwordInput);
  } else {
    removeErrorSpan(passwordInputBox, passwordInput);
  }
};

passwordInputBox.addEventListener("focusout", convertPasswordErrorMessage);

export default convertPasswordErrorMessage;
