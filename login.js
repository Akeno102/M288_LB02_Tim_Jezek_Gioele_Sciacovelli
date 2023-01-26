function checkPassword(event) {
    var url = "login.json";
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error("Failed to load login.json");
        }
    }) 
        .then(data => {
            const correctEmail = data.email; 
            const correctPw = data.password;
            const email = document.getElementById("email").value; 
            const password = document.getElementById("password").value;
    
            if (email === correctEmail && password === correctPw) {
                window.location.href="LoginDone.html"
            }else{
                alert("Failed Login") 
            }
            })
            .catch(error => {
                console.log("Error loading login " + error); 
            });
    event.preventDefault(); 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = ""; 

    //email validation
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        messageDiv.innerHTML = "Invalid Email";
        return;
    }

    //password validation
    if (password.length < 8) {
        messageDiv.innerHTML = "Password must be at least 8 characters long.";
    } else if (email === "") {
        messageDiv.innerHTML = "Email is required.";
    } else {
        if(password.length>=8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#\$%\^&\*]/.test(password)){
            messageDiv.innerHTML = "<span class='strong'>Your Password is Strong</span>";
        }else if(password.length>=6 && /[A-Z]/.test(password)){
            messageDiv.innerHTML = "<span class='could-be-better'>Your Password is could be better</span>";
        }else{
            messageDiv.innerHTML = "<span class='weak'>Your Password is Weak</span>";
        }
    }
}
