document.getElementById("loginBtn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    // You can perform further validation here if needed
    if (email.trim() !== "") {
        alert("Login successful for email: " + email);
        // Redirect to another page or perform further actions upon successful login
    } else {
        alert("Please enter your email address.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Disable horizontal scrolling
    document.body.addEventListener('scroll', function() {
        if (document.body.scrollLeft !== 0) {
            document.body.scrollLeft = 0;
        }
    });
});
