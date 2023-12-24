import { setInputError } from "../utils.js";
import removeErrorSpan from "./removeErrorSpan.js";

import { emailInputBox, emailInput } from "../tags.js";

const isEmail = (email) => {
  return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email);
};

const validateEmail = (e, isSign) => {
  const usedEmail = "test@codeit.com";
  const value = e.target?.value ?? e;

  if (!value) {
    setInputError("이메일을 입력해주세요.", emailInputBox, emailInput);
  } else if (!isEmail(value)) {
    setInputError("올바른 이메일 주소가 아닙니다.", emailInputBox, emailInput);
  } else if (value === usedEmail && isSign === "signup") {
    console.log("dd");
    setInputError("이미 사용 중인 이메일입니다.", emailInputBox, emailInput);
  } else if (value !== usedEmail && isSign === "signin") {
    setInputError("이메일을 확인해주세요.", emailInputBox, emailInput);
  } else {
    removeErrorSpan(emailInputBox, emailInput);
  }
};

emailInputBox.addEventListener("focusout", validateEmail);

export default validateEmail;
