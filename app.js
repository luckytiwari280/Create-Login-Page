document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!username || !password) {
    errorMsg.textContent = "Please fill in both fields.";
  } else {
    errorMsg.textContent = "";
    alert("Login successful!"); // You could redirect here
    // window.location.href = "dashboard.html";
  }
});