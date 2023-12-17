const passwordInputBox = document.querySelector(".sign-input-box.sign-password");
const passwordInput = document.querySelector("#password");

const createErrorSpan = (convertText) => {
  if (passwordInputBox.lastElementChild.tagName === "SPAN") {
    const errorSpan = passwordInputBox.lastElementChild;
    convertText(errorSpan);
  } else {
    const span = document.createElement("span");
    span.classList.add("error-message");
    passwordInput.classList.add("error-box");
    convertText(span);
    passwordInputBox.append(span);
  }
};

const removeErrorSpan = () => {
  if (passwordInputBox.lastElementChild.tagName === "SPAN") {
    passwordInputBox.lastElementChild.remove();
    passwordInput.classList.remove("error-box");
  }
};

const isPassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

const convertIncorrectPasswordText = (tag) => {
  tag.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
};

const convertCheckPassword = (tag) => {
  tag.textContent = "비밀번호를 확인해주세요.";
};

const convertPasswordErrorMessage = (e, isSign) => {
  const usedPassword = "codeit101";
  const value = e.target?.value ?? e;

  if (!isPassword(value)) {
    createErrorSpan(convertIncorrectPasswordText);
  } else if (value !== usedPassword && isSign === "signIn") {
    createErrorSpan(convertCheckPassword);
  } else {
    removeErrorSpan();
  }
};

passwordInputBox.addEventListener("focusout", convertPasswordErrorMessage);

export default convertPasswordErrorMessage;
