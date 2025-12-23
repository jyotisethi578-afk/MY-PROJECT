function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("pass").value.trim();

  let isValid = true;

  // Name Validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name cannot be empty";
    alert("Name field is empty!");
    isValid = false;
  }

  // Email Validation
  if (email === "") {
    document.getElementById("emailError").innerText = "Email cannot be empty";
    alert("Email is required!");
    isValid = false;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    alert("Invalid Email!");
    isValid = false;
  }

  // Password Validation
  if (pass === "") {
    document.getElementById("passError").innerText = "Password cannot be empty";
    alert("Password required!");
    isValid = false;
  } else if (pass.length < 6) {
    document.getElementById("passError").innerText = "Password must be 6 characters";
    alert("Weak Password!");
    isValid = false;
  }

  if (isValid) {
    alert("Form Submitted Successfully!");
  }

  return isValid;
}

// Clear error on typing
function clearError(id) {
  document.getElementById(id).innerText = "";
}
