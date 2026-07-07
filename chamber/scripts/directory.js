const membersURL = "data/members.json";

const membersContainer = document.querySelector("#members");

// Fetch JSON Data

async function getMembers() {

    try {

        const response = await fetch(membersURL);

        const members = await response.json();

        displayMembers(members);

    } catch (error) {

        console.error("Unable to load members:", error);

    }

}

// Create Business Cards

function displayMembers(members) {


    membersContainer.innerHTML = "";


    members.forEach((member) => {


        const card = document.createElement("section");


        card.innerHTML = `

            <img src="images/${member.image}" 
                 alt="${member.name} logo"
                 loading="lazy">


            <h3>${member.name}</h3>


            <p>${member.description}</p>


            <p>
            <strong>Address:</strong> 
            ${member.address}
            </p>


            <p>
            <strong>Phone:</strong>
            ${member.phone}
            </p>


            <p>
            <strong>Membership Level:</strong>
            ${membershipLevel(member.membership)}
            </p>


            <a href="${member.website}" target="_blank">
            Visit Website
            </a>

        `;


        membersContainer.appendChild(card);


    });

}

// Convert Membership Number

function membershipLevel(level) {


    if(level == 3){

        return "Gold Member";

    }

    else if(level == 2){

        return "Silver Member";

    }

    else {

        return "Member";

    }

}

// Grid and List Buttons

const gridButton = document.querySelector("#grid");

const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {

    membersContainer.classList.add("grid");

    membersContainer.classList.remove("list");

});

listButton.addEventListener("click", () => {

    membersContainer.classList.add("list");

    membersContainer.classList.remove("grid");

});

// Footer Year
document.querySelector("#year").textContent =
new Date().getFullYear();

// Last Modified Date
document.querySelector("#lastModified").textContent =
document.lastModified;

// Start Program

getMembers();