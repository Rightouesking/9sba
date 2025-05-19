const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Load saved username
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    username.value = savedUsername;
  }
});

// Show/clear error helpers
function showError(field, message) {
  document.getElementById(field + "Error").textContent = message;
}

function clearError(field) {
  document.getElementById(field + "Error").textContent = "";
}

// Real-time validation
username.addEventListener("input", () => {
  if (username.validity.valueMissing) {
    showError("username", "Username is required.");
  } else if (username.value.length < 3) {
    showError("username", "Username must be at least 3 characters.");
  } else {
    clearError("username");
  }
});

email.addEventListener("input", () => {
  if (email.validity.valueMissing) {
    showError("email", "Email is required.");
  } else if (!email.validity.valid) {
    showError("email", "Please enter a valid email address.");
  } else {
    clearError("email");
  }
});

password.addEventListener("input", () => {
  if (password.validity.valueMissing) {
    showError("password", "Password is required.");
  } else if (!password.validity.valid) {
    showError(
      "password",
      "Password must be at least 8 characters, include a number, a lowercase and an uppercase letter."
    );
  } else {
    clearError("password");
  }
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    showError("confirmPassword", "Passwords do not match.");
  } else {
    clearError("confirmPassword");
  }
});

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from submitting

  let isValid = true;

  // Manual validation
  if (!username.value || username.value.length < 3) {
    showError("username", "Username is required (min 3 characters).");
    isValid = false;
  }

  if (!email.validity.valid) {
    showError("email", "Please enter a valid email address.");
    isValid = false;
  }

  if (!password.validity.valid) {
    showError("password", "Invalid password format.");
    isValid = false;
  }

  if (confirmPassword.value !== password.value) {
    showError("confirmPassword", "Passwords do not match.");
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("username", username.value);
    alert("Registration successful!");
    form.reset();
  }
});