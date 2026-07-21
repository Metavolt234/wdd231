// ===============================
// JOIN PAGE JAVASCRIPT
// WDD 231 Chamber Project
// ===============================

// -------------------------------
// Footer Information
// -------------------------------

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;


// -------------------------------
// Hidden Timestamp
// -------------------------------

const timestamp = document.getElementById("timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}


// -------------------------------
// Membership Dialogs
// -------------------------------

const dialogLinks = document.querySelectorAll("[data-dialog]");
const closeButtons = document.querySelectorAll(".closeDialog");

dialogLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const dialogId = link.dataset.dialog;

        const dialog = document.getElementById(dialogId);

        if (dialog) {
            dialog.showModal();
        }

    });

});

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });

});


// -------------------------------
// Close Dialog when Clicking Outside
// -------------------------------

document.querySelectorAll("dialog").forEach(dialog => {

    dialog.addEventListener("click", (event) => {

        const rect = dialog.getBoundingClientRect();

        const clickedInside =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;

        if (!clickedInside) {
            dialog.close();
        }

    });

});


// -------------------------------
// Membership Card Animation
// -------------------------------

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".member-card");

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, index * 200);

    });

});