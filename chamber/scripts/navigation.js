const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");


    if (navigation.classList.contains("open")) {

        menuButton.textContent = "✖";

    } else {

        menuButton.textContent = "☰";

    }

});


// Close menu when a navigation link is selected

const navLinks = document.querySelectorAll(".navigation a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

    });

});