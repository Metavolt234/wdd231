// =====================================
// navigation.js
// WDD231 - Responsive Navigation
// =====================================

// Get the hamburger button and navigation list
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#primaryNav");

// Toggle the navigation menu
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    // Change hamburger icon to X
    if (navigation.classList.contains("open")) {
        menuButton.innerHTML = "✖";
        menuButton.setAttribute("aria-label", "Close Navigation");
    } else {
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-label", "Open Navigation");
    }
});

// Wayfinding - Highlight current page automatically
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("#primaryNav a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

// Close mobile navigation when browser is resized
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        navigation.classList.remove("open");
        menuButton.innerHTML = "☰";
        menuButton.classList.remove("open");
        menuButton.setAttribute("aria-label", "Open Navigation");
    }
});