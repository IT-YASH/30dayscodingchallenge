document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "username":
        validateUsername();
        break;
      case "email":
        validateEmail();
        break;
      case "password":
        validatePassword();
        break;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateUsername() && validateEmail() && validatePassword()) {
      console.log({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      alert("Form submitted successfully!");
    }
  });

  function validateUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue === "") {
      setError(username, "Username is required");
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 15) {
      setError(username, "Username must be between 3 and 15 characters");
      return false;
    } else {
      setSuccess(username);
      return true;
    }
  }

  function validateEmail() {
    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "") {
      setError(email, "Email is required");
      return false;
    } else if (!emailPattern.test(emailValue)) {
      setError(email, "Email is not valid");
      return false;
    } else {
      setSuccess(email);
      return true;
    }
  }

  function validatePassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === "") {
      setError(password, "Password is required");
      return false;
    } else if (passwordValue.length < 6) {
      setError(password, "Password must be at least 6 characters");
      return false;
    } else {
      setSuccess(password);
      return true;
    }
  }

  function setError(element, message) {
    const formGroup = element.parentElement;
    const small = formGroup.querySelector("small");
    small.innerText = message;
    small.style.display = "block";
    element.style.borderColor = "red";
  }

  function setSuccess(element) {
    const formGroup = element.parentElement;
    const small = formGroup.querySelector("small");
    small.style.display = "none";
    element.style.borderColor = "green";
  }
});
