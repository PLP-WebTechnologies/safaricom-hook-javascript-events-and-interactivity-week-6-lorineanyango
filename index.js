// Toggle Background Color
const toggleColorButton = document.getElementById("toggleColorButton");
let isBlue = false;
toggleColorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = isBlue ? "white" : "lightblue";
  isBlue = !isBlue;
});

// Slider with Real-Time Feedback
const textSlider = document.getElementById("textSlider");
const sliderText = document.getElementById("sliderText");
textSlider.addEventListener("input", () => {
  sliderText.style.fontSize = `${textSlider.value}px`;
});

// Modal
const showModalButton = document.getElementById("showModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

showModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Form Validation
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
  let valid = true;

  if (nameInput.value.length < 3) {
    nameError.classList.remove("hidden");
    valid = false;
  } else {
    nameError.classList.add("hidden");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.classList.remove("hidden");
    valid = false;
  } else {
    emailError.classList.add("hidden");
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.classList.remove("hidden");
    valid = false;
  } else {
    passwordError.classList.add("hidden");
  }

  if (!valid) {
    e.preventDefault(); // Stop form submission
  }
});

// Bonus: Dropdown Menu
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdownMessage");

dropdown.addEventListener("change", () => {
  dropdownMessage.textContent = `You selected: ${dropdown.value}`;
});
