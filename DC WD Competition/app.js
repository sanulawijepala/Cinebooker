// Get elements
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Switch between sign in and sign up form
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Register Popup
const signupBtn = document.querySelector("#SignupBtn");
const registerPopup = document.getElementById("registerPopup");
const closeRegisterPopup = document.getElementById("closeRegisterPopup");
const goToLoginBtn = document.getElementById("goToLogin");

// Show register popup after successful sign up
signupBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  // Show the register popup
  registerPopup.style.display = "flex";
});

// Close the register popup
closeRegisterPopup.addEventListener("click", () => {
  registerPopup.style.display = "none";
});

// Redirect to login form when clicking 'Go to Login' button
goToLoginBtn.addEventListener("click", () => {
  registerPopup.style.display = "none";
  location.reload(); // Reload page for login form
});

// Login Popup
const loginBtn = document.querySelector(".sign-in-form .btn"); 
const usernameInput = document.querySelector(".sign-in-form input[type='text']");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const userNameDisplay = document.getElementById("userName");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  let username = usernameInput.value.trim();
  if (username) {
    userNameDisplay.textContent = username; // Set username in popup
    popup.style.display = "flex"; // Show login popup
  } else {
    alert("Please enter your username!");
  }
});

// Close the login popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close the login popup when clicking outside it
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});


window.addEventListener('load', function() {
 
  setTimeout(function() {
    const loader = document.querySelector('.vibrant-loader');
    loader.classList.add('hidden');
    
    
    setTimeout(function() {
      loader.remove();
    }, 800);
  }, 2000); 
});


setTimeout(function() {
  const loader = document.querySelector('.vibrant-loader');
  if (loader && !loader.classList.contains('hidden')) {
    loader.classList.add('hidden');
    setTimeout(function() {
      loader.remove();
    }, 800);
  }
}, 4000); 
