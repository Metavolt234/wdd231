// =====================================
// date.js
// WDD231 - Footer Dates
// =====================================

// Current year
const currentYear = new Date().getFullYear();
document.querySelector("#currentYear").textContent = currentYear;

// Last modified date
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;