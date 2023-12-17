const signInputBox = document.querySelector(".sign-input-box");
const signInput = document.querySelector(".sign-input");

const createErrorSpan = (addText) => {
  if (signInputBox.lastElementChild.tagName === "SPAN") {
    const errorSpan = signInputBox.lastElementChild;
    addText(errorSpan);
  } else {
    const span = document.createElement("span");
    span.classList.add("error-message");
    signInput.classList.add("error-box");
    addText(span);
    signInputBox.append(span);
  }
};

const removeErrorSpan = () => {
  if (signInputBox.lastElementChild.tagName === "SPAN") {
    signInputBox.lastElementChild.remove();
    signInput.classList.remove("error-box");
  }
};

const incorrectEmail = (tag) => {
  tag.textContent = "올바른 이메일 주소가 아닙니다.";
};

const emptyEmail = (tag) => {
  tag.textContent = "이메일을 입력해주세요.";
};

const isEmail = (email) => {
  return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email);
};

const emailErrorMessage = (e) => {
  if (!e.target.value) {
    createErrorSpan(emptyEmail);
  } else if (!isEmail(e.target.value)) {
    createErrorSpan(incorrectEmail);
  } else {
    removeErrorSpan();
  }
};

signInputBox.addEventListener("focusout", emailErrorMessage);
