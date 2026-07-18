// ===============================
// FOOTER DATE
// ===============================

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;


// ===============================
// WEATHER API
// ===============================

const apiKey = "43cf5d9e4c571066dd11fa87fd68d5c9";

const latitude = 0.3476;
const longitude = 32.5825;


const currentWeatherURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;


const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;



async function getWeather(){

    try{

        const response = await fetch(currentWeatherURL);

        const data = await response.json();

        displayWeather(data);

    }

    catch(error){

        console.log("Weather Error:", error);

    }

}



function displayWeather(data){

    const container =
    document.querySelector("#current-weather");


    container.innerHTML = `

        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"
        alt="${data.weather[0].description}">

        <p>
        Temperature:
        <strong>${Math.round(data.main.temp)}°C</strong>
        </p>

        <p>
        ${data.weather[0].description}
        </p>

    `;

}



// ===============================
// FORECAST
// ===============================


async function getForecast(){

    try{

        const response =
        await fetch(forecastURL);


        const data =
        await response.json();


        displayForecast(data.list);


    }

    catch(error){

        console.log(error);

    }

}



function displayForecast(days){

    const forecast =
    document.querySelector("#forecast");


    forecast.innerHTML="";


    const daily =
    days.filter(item =>
        item.dt_txt.includes("12:00:00")
    );


    daily.slice(0,3).forEach(day=>{


        const div =
        document.createElement("div");


        const date =
        new Date(day.dt_txt);


        div.innerHTML = `

        <h3>
        ${date.toLocaleDateString(
            "en-US",
            {weekday:"long"}
        )}
        </h3>


        <p>
        ${Math.round(day.main.temp)}°C
        </p>

        `;


        forecast.appendChild(div);


    });

}



// ===============================
// MEMBER SPOTLIGHTS
// ===============================


const membersURL =
"data/members.json";



async function getMembers(){


    try{


        const response =
        await fetch(membersURL);


        const members =
        await response.json();


        displaySpotlights(members);


    }


    catch(error){

        console.log(error);

    }


}



function displaySpotlights(members){


    const container =
    document.querySelector("#spotlight-container");


    container.innerHTML="";



    // Silver and Gold only

    let qualified =
    members.filter(member =>
        member.membership === 2 ||
        member.membership === 3
    );


    // Randomize

    qualified.sort(() =>
        Math.random()-0.5
    );


    // Choose 3

    qualified.slice(0,3)
    .forEach(member=>{


        const card =
        document.createElement("article");


        card.classList.add(
            "spotlight-card"
        );


        card.innerHTML = `


        <h3>
        ${member.name}
        </h3>


        <img src="images/${member.image}"
        alt="Logo of ${member.name}">


        <p>
        ${member.description}
        </p>


        <p>
        ${member.address}
        </p>


        <p>
        ${member.phone}
        </p>


        <p>
        <a href="${member.website}">
        Website
        </a>
        </p>


        <p>
        Membership:
        ${getMembership(member.membership)}
        </p>


        `;


        container.appendChild(card);


    });


}



function getMembership(level){


    if(level === 3){

        return "Gold Member";

    }


    if(level === 2){

        return "Silver Member";

    }


    return "Member";


}



// START FUNCTIONS

getWeather();

getForecast();

getMembers();