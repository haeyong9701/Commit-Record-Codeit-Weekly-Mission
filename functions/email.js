import createErrorSpan from "./createErrorSpan.js";
import removeErrorSpan from "./removeErrorSpan.js";

import { emailInputBox, emailInput } from "../tags.js";

const convertIncorrectEmailText = (tag) => {
  tag.textContent = "올바른 이메일 주소가 아닙니다.";
};

const convertEmptyEmailText = (tag) => {
  tag.textContent = "이메일을 입력해주세요.";
};

const convertUsedEmail = (tag) => {
  tag.textContent = "이미 사용 중인 이메일입니다.";
};

const convertCheckEmail = (tag) => {
  tag.textContent = "이메일을 확인해주세요.";
};

const isEmail = (email) => {
  return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email);
};

const convertEmailErrorMessage = (e, isSign) => {
  const usedEmail = "test@codeit.com";
  const value = e.target?.value ?? e;

  if (!value) {
    createErrorSpan(convertEmptyEmailText, emailInputBox, emailInput);
  } else if (!isEmail(value)) {
    createErrorSpan(convertIncorrectEmailText, emailInputBox, emailInput);
  } else if (value === usedEmail) {
    createErrorSpan(convertUsedEmail, emailInputBox, emailInput);
  } else if (value !== usedEmail && isSign === "signIn") {
    createErrorSpan(convertCheckEmail, emailInputBox, emailInput);
  } else {
    removeErrorSpan(emailInputBox, emailInput);
  }
};

emailInputBox.addEventListener("focusout", convertEmailErrorMessage);

export default convertEmailErrorMessage;
