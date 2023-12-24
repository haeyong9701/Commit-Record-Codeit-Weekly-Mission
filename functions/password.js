import { setInputError } from "../utils.js";
import removeErrorSpan from "./removeErrorSpan.js";

import { passwordInputBox, passwordInput } from "../tags.js";

const isPassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

const convertPasswordErrorMessage = (e, isSign) => {
  const usedPassword = "codeit101";
  const value = e.target?.value ?? e;

  if (!value) {
    setInputError("비밀번호를 입력해주세요.", passwordInputBox, passwordInput);
  } else if (!isPassword(value)) {
    setInputError("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.", passwordInputBox, passwordInput);
  } else if (value !== usedPassword && isSign === "signIn") {
    setInputError("비밀번호를 확인해주세요.", passwordInputBox, passwordInput);
  } else {
    removeErrorSpan(passwordInputBox, passwordInput);
  }
};

passwordInputBox.addEventListener("focusout", convertPasswordErrorMessage);

export default convertPasswordErrorMessage;
