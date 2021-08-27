// EMAIL VALIDATION
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const emailInputs = document.getElementsByClassName("try-free__input");

for (const emailInput of emailInputs) {
  const validationText = emailInput.nextElementSibling;

  emailInput.addEventListener("keyup", () => {
    if (emailInput.value.match(pattern)) {
      validationText.innerHTML = "your email is valid";
      validationText.classList.add("email-valid");
      emailInput.classList.add("valid-input-border");
      validationText.classList.remove("email-error");
      emailInput.classList.remove("invalid-input-border");
      emailInput.classList.remove("normal-input-border");
    } else {
      validationText.innerHTML = "your email is invalid";
      validationText.classList.add("email-error");
      emailInput.classList.add("invalid-input-border");
      validationText.classList.remove("email-valid");
      emailInput.classList.remove("valid-input-border");
      emailInput.classList.remove("normal-input-border");
    }

    if (emailInput.value == "") {
      validationText.innerHTML = "";
      emailInput.classList.add("normal-input-border");
      emailInput.classList.remove("valid-input-border");
      emailInput.classList.remove("invalid-input-border");
    }
  });
}
