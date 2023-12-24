import { URL, TEST_USER, validateEmail, validatePassword, togglePassword } from "./utils.js";
import { signForm, emailInputBox, emailInput, passwordInputBox, passwordInput, passwordToggleButton } from "./tags.js";

const signin = async (e) => {
  e.preventDefault();

  if (TEST_USER.email === emailInput.value && TEST_USER.password === passwordInput.value) {
    location.href = "./folder.html";
  } else {
    validateEmail(emailInput.value, "signin");
    validatePassword(passwordInput.value, "signin");
  }

  const user = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    const response = await fetch(`${URL}/api/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      location.href = "./folder.html";
    }
  } catch (error) {
    alert(error.message);
  }
};

emailInputBox.addEventListener("focusout", validateEmail);
passwordInputBox.addEventListener("focusout", validatePassword);
passwordToggleButton.addEventListener("click", () => togglePassword(passwordInput, passwordToggleButton));
signForm.addEventListener("submit", signin);

export default signin;
