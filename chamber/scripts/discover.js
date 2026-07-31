// ==========================================
// IMPORT PLACES MODULE
// ==========================================

import places from "../data/places.mjs";

// ==========================================
// FOOTER
// ==========================================

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;


// ==========================================
// VISITOR MESSAGE (localStorage)
// ==========================================

const message = document.querySelector("#visitor-message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {

    message.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const daysBetween =
        Math.floor((now - Number(lastVisit)) / 86400000);

    if (daysBetween < 1) {

        message.textContent =
            "Back so soon! Awesome!";

    } else if (daysBetween === 1) {

        message.textContent =
            "You last visited 1 day ago.";

    } else {

        message.textContent =
            `You last visited ${daysBetween} days ago.`;

    }

}

localStorage.setItem("lastVisit", now);


// ==========================================
// BUILD DISCOVER CARDS
// ==========================================

const container = document.querySelector("#discover-grid");

places.forEach(place => {

    const card = document.createElement("article");
    card.classList.add("discover-card");

    const title = document.createElement("h2");
    title.textContent = place.name;

    const figure = document.createElement("figure");

    const image = document.createElement("img");

    image.src = place.image;

    image.alt = place.name;

    image.loading = "lazy";

    image.width = 300;

    image.height = 200;

    figure.appendChild(image);

    const address = document.createElement("address");
    address.textContent = place.address;

    const description = document.createElement("p");
    description.textContent = place.description;

    const button = document.createElement("button");
    button.textContent = place.button;

    button.addEventListener("click", () => {

        alert(`More information about ${place.name} will be available soon.`);

    });

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    container.appendChild(card);

});