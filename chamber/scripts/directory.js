const membersURL = "data/members.json";

const membersContainer = document.querySelector("#members");

const gridButton = document.querySelector("#grid");

const listButton = document.querySelector("#list");



// Fetch JSON Data

async function getMembers() {

    try {

        const response = await fetch(membersURL);

        const members = await response.json();

        displayMembers(members);

    } catch (error) {

        console.error("Error loading members:", error);

    }

}



// Display Members

function displayMembers(members) {


    membersContainer.innerHTML = "";


    members.forEach(member => {


        const card = document.createElement("section");


        card.innerHTML = `

            <h3>${member.name}</h3>


            <div class="card-content">


                <img 
                src="images/${encodeURIComponent(member.image)}"
                alt="${member.name} logo"
                loading="lazy">


                <div class="details">


                    <p class="tagline">
                        ${member.description}
                    </p>


                    <p>
                    <strong>Email:</strong>
                    ${member.email}
                    </p>


                    <p>
                    <strong>Phone:</strong>
                    ${member.phone}
                    </p>


                    <p>
                    <strong>Address:</strong>
                    ${member.address}
                    </p>


                    <p>
                    <strong>Membership:</strong>
                    ${getMembership(member.membership)}
                    </p>


                    <a href="${member.website}" target="_blank">
                    Visit Website
                    </a>


                </div>


            </div>

        `;


        membersContainer.appendChild(card);


    });


}



// Membership Level

function getMembership(level) {


    switch(level){


        case 3:

            return "Gold Member";


        case 2:

            return "Silver Member";


        default:

            return "Member";

    }

}



// Grid View

gridButton.addEventListener("click", () => {


    membersContainer.classList.add("grid");

    membersContainer.classList.remove("list");


});




// List View

listButton.addEventListener("click", () => {


    membersContainer.classList.add("list");

    membersContainer.classList.remove("grid");


});




// Footer Year

document.querySelector("#year").textContent =
new Date().getFullYear();



// Last Modification

document.querySelector("#lastModified").textContent =
document.lastModified;



// Start

getMembers();