function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    let isValid = true;
  
    // Email validation
    if (email.length <= 3 || !email.includes("@") || !email.includes(".")) {
      emailError.textContent = "Make sure email is more than 3 characters and has @ and a .";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Password validation
    if (password.length <= 8) {
      passwordError.textContent = "Make sure password is more than 8 characters.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }
  
    return isValid;
  }
  