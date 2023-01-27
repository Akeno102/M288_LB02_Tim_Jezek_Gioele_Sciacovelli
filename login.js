// check password strength
var password = document.getElementById("password");
var message = document.getElementById("message");
password.addEventListener("input", function() {
  var passwordValue = password.value;
  if (passwordValue.length < 8) {
    message.innerHTML = "Weak";
  } else if (passwordValue.length >= 8 && passwordValue.length < 12) {
    message.innerHTML = "Could be better";
  } else {
    message.innerHTML = "Strong";
  }
});




/*
//login form submit event
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
  
    var users = JSON.parse(localStorage.getItem("users")) || [];
    
    // check if email and password match with a user
    var user = users.find(function(user) {
      return user.email === email && user.password === password;
    });
  
    if (user) {
      message.innerHTML = "Login successful!";
    } else {
      message.innerHTML = "Invalid email or password. Please try again.";
    }
  });
  
  //signup button click event
  document.getElementById("signup-btn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
    
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    var existingUser = users.find(function(user) {
      return user.email === email;
    });
  
    if (existingUser) {
      message.innerHTML = "User with this email already exists.";
    } else {
      users.push({ email: email, password: password });
      localStorage.setItem("users", JSON.stringify(users));
      message.innerHTML = "Signup successful! You can now login.";
    }
    fetch('users.json')
    .then(response => response.json())
    .then(data => {
      // do something with the data
    })
    .catch(error => {
      console.log('Error:', error);
    });

  });
  */