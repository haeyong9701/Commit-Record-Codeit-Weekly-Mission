const signInputBox = document.querySelector(".sign-input-box");
const signInput = document.querySelector(".sign-input");

const createErrorSpan = (convertText) => {
  if (signInputBox.lastElementChild.tagName === "SPAN") {
    const errorSpan = signInputBox.lastElementChild;
    convertText(errorSpan);
  } else {
    const span = document.createElement("span");
    span.classList.add("error-message");
    signInput.classList.add("error-box");
    convertText(span);
    signInputBox.append(span);
  }
};

const removeErrorSpan = () => {
  if (signInputBox.lastElementChild.tagName === "SPAN") {
    signInputBox.lastElementChild.remove();
    signInput.classList.remove("error-box");
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

const isEmail = (email) => {
  return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email);
};

const convertEmailErrorMessage = (e) => {
  const usedEmail = "test@codeit.com";
  if (!e.target.value) {
    createErrorSpan(convertEmptyEmailText);
  } else if (!isEmail(e.target.value)) {
    createErrorSpan(convertIncorrectEmailText);
  } else if (e.target.value === usedEmail) {
    createErrorSpan(convertUsedEmail);
  } else {
    removeErrorSpan();
  }
};

signInputBox.addEventListener("focusout", convertEmailErrorMessage);
