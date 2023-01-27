function checkPassword(event) {
  fetch("login.json")
      .then(response => response.json())
      .then(data => {
        const correctEmail = data.email;
        const correctPw = data.password;

        const email = document.getElementById("email").value; // Das Eingegebene Login wird ausgelesen und als Konstanten definiert
        const password = document.getElementById("password").value;

        if (email === correctEmail && password === correctPw) {
          window.location.href="logged_in!.html"//Wenn Email und Passwort aus dem JSON File mit denen aus dem Login übereinstimmen wird man weitergeleitet
        }else{
          alert("Falsches Login") //Eine Fehlermeldung erscheint wenn Das Login nicht übereinstimmt
        }
      })
      .catch(error => {
        console.log("Error loading login " + error); // Bei Ladefehlern wird in der Konsole der Errorcode ausgegeben
      });
  event.preventDefault(); // Verhindert das abschicken des Formulars
}

$(document).ready(function () {
  $("#password").on('keyup', function(){
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    if ($('#password').val().length < 6) {
      $('#password-strength-status').removeClass();
      $('#password-strength-status').addClass('weak-password');
      $('#password-strength-status').html("Weak (should be atleast 6 characters.)");
    } else {
      if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {
        $('#password-strength-status').removeClass();
        $('#password-strength-status').addClass('strong-password');
        $('#password-strength-status').html("Strong Password (Well done)");
      } else {
        $('#password-strength-status').removeClass();
        $('#password-strength-status').addClass('medium-password');
        $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters or some combination.)");
      }
    }
  });
});
document.querySelector('#email').addEventListener('input', validateForm);
document.querySelector('#password').addEventListener('input', validateForm);

function validateForm() {
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    if (email.includes("@") && password.length > 0) {
        document.querySelector('#submit').disabled = false;
    } else {
        document.querySelector('#submit').disabled = true;
    }
}


// generate random numbers for the calculation
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
// store the correct answer to the calculation
var answer = num1 + num2;
// display the numbers in the question
document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
// get the submit button
var submitButton = document.getElementById("submit-button");
// add an event listener to the button to check the answer when clicked
submitButton.addEventListener("click", checkAnswer);
function checkAnswer() {
    // get the user's answer from the input field
    var userAnswer = document.getElementById("captcha-answer").value;
    // check if the user's answer is correct
    if (userAnswer == answer) {
        document.getElementById("result").innerHTML = "Captcha passed!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect, please try again.";
    }
}

