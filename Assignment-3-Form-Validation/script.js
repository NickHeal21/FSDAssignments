const registrationForm = document.querySelector("#registration-form");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const password = document.querySelector("#password").value;
  let formIsValid = true;

  if (name.length < 2) {
    document.querySelector("#name-error").textContent = "Enter a name with at least 2 characters.";
    formIsValid = false;
  } else {
    document.querySelector("#name-error").textContent = "";
  }

  if (!email.includes("@") || !email.includes(".")) {
    document.querySelector("#email-error").textContent = "Enter a valid email address.";
    formIsValid = false;
  } else {
    document.querySelector("#email-error").textContent = "";
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    document.querySelector("#phone-error").textContent = "Enter at least 10 phone digits.";
    formIsValid = false;
  } else {
    document.querySelector("#phone-error").textContent = "";
  }

  if (password.length < 8) {
    document.querySelector("#password-error").textContent = "Password must be at least 8 characters.";
    formIsValid = false;
  } else {
    document.querySelector("#password-error").textContent = "";
  }

  if (formIsValid) {
    document.querySelector("#success").textContent = "Registration details look good!";
    registrationForm.reset();
  } else {
    document.querySelector("#success").textContent = "";
  }
});
