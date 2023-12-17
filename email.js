const emailInputBox = document.querySelector(".sign-input-box");
const emailInput = document.querySelector("#email");

const createErrorSpan = (convertText) => {
  if (emailInputBox.lastElementChild.tagName === "SPAN") {
    const errorSpan = emailInputBox.lastElementChild;
    convertText(errorSpan);
  } else {
    const span = document.createElement("span");
    span.classList.add("error-message");
    emailInput.classList.add("error-box");
    convertText(span);
    emailInputBox.append(span);
  }
};

const removeErrorSpan = () => {
  if (emailInputBox.lastElementChild.tagName === "SPAN") {
    emailInputBox.lastElementChild.remove();
    emailInput.classList.remove("error-box");
  }
};

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
    createErrorSpan(convertEmptyEmailText);
  } else if (!isEmail(value)) {
    createErrorSpan(convertIncorrectEmailText);
  } else if (value === usedEmail) {
    createErrorSpan(convertUsedEmail);
  } else if (value !== usedEmail && isSign === "signIn") {
    createErrorSpan(convertCheckEmail);
  } else {
    removeErrorSpan();
  }
};

emailInputBox.addEventListener("focusout", convertEmailErrorMessage);

export default convertEmailErrorMessage;
