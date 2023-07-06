document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform login validation (example: check if username is "admin" and password is "password")
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to another page or perform other actions
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  