// ================= MOBILE MENU =================

// Select elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================= THEME TOGGLE =================

// Select theme button
const themeToggle = document.getElementById("theme-toggle");
const botaoTema = document.getElementById("theme-toggle");
const icon = botaoTema.querySelector("i");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});

// Check saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

// Change theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // Save theme
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// ================= CONTACT FORM =================

// Form elements
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Get field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email validation pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation
    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields!");

        return;
    }

    if (!email.match(emailPattern)) {

        alert("Please enter a valid email!");

        return;
    }

    // Success message
    alert("Message sent successfully!");

    // Clear form
    form.reset();
});