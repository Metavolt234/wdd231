const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navMenu");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {

        menuButton.innerHTML = "✖";

    } else {

        menuButton.innerHTML = "☰";

    }

});