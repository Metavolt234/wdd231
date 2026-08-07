// ==========================================
// main.js
// Fagil Manday Library
// Shared JavaScript Functions
// ==========================================


import { initializeNavigation } from "./navigation.js";


// Start Navigation

initializeNavigation();




// ==========================================
// Footer Year
// ==========================================


const yearElement =
    document.querySelector("#year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}




// ==========================================
// Last Modified Date
// ==========================================


const modifiedElement =
    document.querySelector("#lastModified");


if (modifiedElement) {


    modifiedElement.textContent =
        `Last Updated: ${document.lastModified}`;


}




// ==========================================
// Visitor Local Storage Message
// ==========================================


const visitorMessage =
    document.querySelector("#visitor-message");



if (visitorMessage) {


    const previousVisit =
        localStorage.getItem(
            "lastVisit"
        );



    const currentVisit =
        Date.now();



    if (!previousVisit) {


        visitorMessage.textContent =
            "Welcome to Fagil Manday Library! This is your first visit.";


    } else {


        const difference =
            currentVisit - Number(previousVisit);



        const days =
            Math.floor(
                difference / 
                (1000 * 60 * 60 * 24)
            );



        if (days === 0) {


            visitorMessage.textContent =
                "Welcome back! You visited earlier today.";



        } else if (days === 1) {


            visitorMessage.textContent =
                "Welcome back! Your last visit was yesterday.";



        } else {


            visitorMessage.textContent =
                `Welcome back! Your last visit was ${days} days ago.`;

        }


    }



    localStorage.setItem(
        "lastVisit",
        currentVisit
    );


}