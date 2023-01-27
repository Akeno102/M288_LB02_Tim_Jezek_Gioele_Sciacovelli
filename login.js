function validatePassword() {
  var password = document.getElementById("password").value;
  var passwordError = document.getElementById("password-error");
  if (password.length < 8) {
    passwordError.innerHTML = "Password is too weak.";
    passwordError.style.color = "red";
  } else {
    passwordError.innerHTML = "";
  }
}