// ===============================
// Mobile Navigation Module
// Fagil Manday Library
// ===============================

export function initializeNavigation() {

    const menuButton = document.querySelector("#menu");
    const navigation = document.querySelector("#navMenu");

    // Stop if elements don't exist
    if (!menuButton || !navigation) return;

    // Accessibility
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.innerHTML = isOpen ? "✖" : "☰";

        menuButton.setAttribute("aria-expanded", isOpen);

    });

    // Close menu after clicking a link (mobile)
    const links = navigation.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 768) {

                navigation.classList.remove("open");

                menuButton.innerHTML = "☰";

                menuButton.setAttribute("aria-expanded", "false");

            }

        });

    });

}