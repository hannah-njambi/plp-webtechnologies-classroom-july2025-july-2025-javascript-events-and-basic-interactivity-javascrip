// Interactive Feature 1: Toggle Info
const toggleBtn = document.getElementById("toggleBtn");
const infoText = document.getElementById("infoText");

toggleBtn.addEventListener("click", () => {
  if (infoText.style.display === "none") {
    infoText.style.display = "block";
  } else {
    infoText.style.display = "none";
  }
});
// Interactive Feature 2: Click Counter
let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("count");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// Custom Form Validation
const signupForm = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  // Username validation
  if (username.length < 3) {
    errors.push("Username must be at least 3 characters long.");
  }

  // Email validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Display feedback
  if (errors.length > 0) {
    feedback.style.color = "red";
    feedback.innerHTML = errors.join("<br>");
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully!";
    signupForm.reset();
  }
});
