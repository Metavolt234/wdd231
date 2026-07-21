// ===============================
// Footer Info
// ===============================

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
document.lastModified;


// ===============================  
// Read URL Parameters
// ===============================

const params = new URLSearchParams(window.location.search);


// Required Form Fields

document.getElementById("firstName").textContent =
params.get("firstName") || "Not Provided";

document.getElementById("lastName").textContent =
params.get("lastName") || "Not Provided";

document.getElementById("email").textContent =
params.get("email") || "Not Provided";

document.getElementById("phone").textContent =
params.get("phone") || "Not Provided";

document.getElementById("organization").textContent =
params.get("organization") || "Not Provided";

document.getElementById("membership").textContent =
params.get("membership") || "Not Selected";


// ===============================
// Format Timestamp
// ===============================

const timestamp = params.get("timestamp");

if (timestamp) {

    const date = new Date(timestamp);

    document.getElementById("timestamp").textContent =
        date.toLocaleString("en-UG", {
            dateStyle: "full",
            timeStyle: "short"
        });

} else {

    document.getElementById("timestamp").textContent = "Unavailable";

}