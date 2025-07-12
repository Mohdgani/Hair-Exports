document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || // Ctrl+Shift+I/J
    (e.ctrlKey && e.key === "U") // Ctrl+U
  ) {
    e.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("ready");
});
const flipButtons = document.querySelectorAll(".flip-card-back button");

flipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Reset styles for all buttons
    flipButtons.forEach((b) => {
      b.style.backgroundColor = "crimson"; // revert to neutral
      b.style.color = "#fff";
      b.style.border = "none";
      b.style.padding = "10px 20px";
      b.style.borderRadius = "8px";
    });

    // Set styles for clicked button
    button.style.backgroundColor = "c0c0c0";
    button.style.color = "#fff";
  });
});

function toggleFlip(btn) {
  const flipInner = btn.closest(".card").querySelector(".flip-card-inner");
  const currentTransform = flipInner.style.transform;

  if (currentTransform === "rotateY(180deg)") {
    flipInner.style.transform = "rotateY(0deg)";
  } else {
    flipInner.style.transform = "rotateY(180deg)";
  }
}

function increment() {
  const input = document.getElementById("counter-value");
  input.value = parseInt(input.value) + 1;
}

function decrement() {
  const input = document.getElementById("counter-value");
  if (parseInt(input.value) > parseInt(input.min)) {
    input.value = parseInt(input.value) - 1;
  }
}

// cart
// Counter handlers
function increment() {
  const input = document.getElementById("counter-value");
  input.value = parseInt(input.value) + 1;
}
function decrement() {
  const input = document.getElementById("counter-value");
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

// Add to Cart Handler
document.getElementById("add").addEventListener("click", () => {
  const length = document.getElementById("length").value;
  const type = document.getElementById("hairType").value;
  const weight = document.getElementById("weight").value;
  const quantity = document.getElementById("counter-value").value;

  if (!type) {
    showAlert("Please select a hair type before adding to cart.");
    return;
  }

  const item = { length, type, weight, quantity };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  showAlert("Item added to cart!");
});

// Navigate to summary page
function placeOrder() {
  window.location.href = "cart.html"; // Make sure order.html exists
}

// alert box
function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  alertBox.querySelector("p").textContent = message;
  document.getElementById("alertOverlay").style.display = "block";
}

function closeAlert() {
  document.getElementById("alertOverlay").style.display = "none";
}

// slider js
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}
// Optional: Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// Initial load
showSlide(currentSlide);
