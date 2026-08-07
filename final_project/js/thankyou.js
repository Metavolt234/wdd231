// ==========================================
// thankyou.js
// Displays Submitted Form Information
// ==========================================


const year =
    document.querySelector("#year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}



const modified =
    document.querySelector("#lastModified");


if (modified) {

    modified.textContent =
        `Last Updated: ${document.lastModified}`;

}




// Read form data

const params =
    new URLSearchParams(
        window.location.search
    );



const fields = [

    "fullname",
    "email",
    "phone",
    "book",
    "message"

];



fields.forEach(field => {


    const element =
        document.querySelector(`#${field}`);



    if (element) {


        element.textContent =
            params.get(field) ||
            "Not Provided";


    }


});