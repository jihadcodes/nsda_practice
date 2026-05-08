document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  // Name validation
  let name = document.getElementById("name").value;
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email validation
  let email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Phone validation
  let phone = document.getElementById("phone").value;
  if (phone === "") {
    document.getElementById("phoneError").innerText = "Phone is required";
    isValid = false;
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  // Message validation
  let message = document.getElementById("message").value;
  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required";
    isValid = false;
  } else {
    document.getElementById("messageError").innerText = "";
  }

  // Success message
  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  }
});