const form = document.querySelector("#registration-form");
const fields = ["name", "email", "phone", "password"];

function showError(field, message) {
  const input = document.querySelector(`#${field}`);
  document.querySelector(`#${field}-error`).textContent = message;
  input.classList.toggle("invalid", Boolean(message));
  input.setAttribute("aria-invalid", String(Boolean(message)));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#success").textContent = "";
  const values = Object.fromEntries(new FormData(form).entries());
  const errors = {
    name: values.name.trim().length < 2 ? "Please enter your name (at least 2 characters)." : "",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) ? "" : "Enter a valid email address.",
    phone: /^\+?[\d\s().-]{10,}$/.test(values.phone.trim()) && values.phone.replace(/\D/g, "").length >= 10 ? "" : "Enter a phone number with at least 10 digits.",
    password: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(values.password) ? "" : "Use at least 8 characters, including a letter and a number."
  };

  fields.forEach((field) => showError(field, errors[field]));
  const firstInvalid = fields.find((field) => errors[field]);
  if (firstInvalid) {
    document.querySelector(`#${firstInvalid}`).focus();
    return;
  }
  document.querySelector("#success").textContent = "Registration details look good!";
  form.reset();
});

fields.forEach((field) => document.querySelector(`#${field}`).addEventListener("input", () => {
  showError(field, "");
  document.querySelector("#success").textContent = "";
}));
