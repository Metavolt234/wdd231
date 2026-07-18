// ===============================
// HAMBURGER MENU
// ===============================

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navMenu");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        menuButton.textContent =
            navigation.classList.contains("open") ? "✖" : "☰";

        menuButton.setAttribute(
            "aria-expanded",
            navigation.classList.contains("open")
        );
    });

}


// ===============================
// CLOSE MENU WHEN WINDOW IS RESIZED
// ===============================

window.addEventListener("resize", () => {

    if (window.innerWidth >= 608) {

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

    }

});