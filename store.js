

let  search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{
    search.classList.toggle('active')
    menu.classList.remove('active')
}


let  menu=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick =() =>{
    menu.classList.toggle('active')
    search.classList.remove('active')
}
//Hide Menu And Search Box On Scroll
window.onscroll =() => {
    menu.classList.remove('active')
    search.classList.remove('active')
}
//header
let header=document.querySelector('header');
window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow',window.scrollY >0);
});




  // Get the modal element
  var modal = document.getElementById("myModal");

  // Get the close button element
  var closeBtn = document.getElementsByClassName("close")[0];
  
  // Get the "Buy Now" button element
  var buyNowBtn = document.getElementById("buy-now-btn");
  
  // Get the purchase info element
  var purchaseInfo = document.getElementById("purchase-info");
  
  // Add a click event listener to the "Buy Now" button
  buyNowBtn.addEventListener("click", function() {
    // Set the purchase info content
    purchaseInfo.innerHTML = "Professional mechanic working on the engine of the car in the garage. Car repair service."+
    " The concept of checking the readiness of the car before leaving."+
    "Professional mechanic working on the engine of the car in the garage. Car repair service."+
    " The concept of checking the readiness of the car before leaving."+
    "Professional mechanic working on the engine of the car in the garage. Car repair service."+
    " The concept of checking the readiness of the car before leaving."+
    "Professional mechanic working on the engine of the car in the garage. Car repair service."+
    " The concept of checking the readiness of the car before leaving.";
  
    // Show the modal
    modal.style.display = "block";
  });
  
  // Add a click event listener to the close button
  closeBtn.addEventListener("click", function() {
    // Hide the modal
    modal.style.display = "none";
  });





  // Function to generate a random color of body
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change the background color of the body
function changeBackgroundColor() {
  var color = getRandomColor();
  document.body.style.backgroundColor = color;
}






// Scr of login 
// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    
});
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("fullname").value;
  var password = document.getElementById("password").value;

  if (username === "Hussein" && password === "password") {
    window.location.href = "StoreCar.html"; // Redirect to the desired page
  } else {
    alert("Incorrect username or password!"); // Show error message
  }
}
// Handling form submission event
form.addEventListener("submit", handleFormData);




