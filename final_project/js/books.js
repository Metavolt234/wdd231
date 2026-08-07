// =========================================
// books.js
// Fagil Manday Library
// WDD231 Final Project
// =========================================

import { initializeNavigation } from "./navigation.js";
import { openBookModal } from "./modal.js";
import { saveFavorite } from "./storage.js";


// Initialize Navigation
initializeNavigation();


// Footer Information
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent =
        `Last Updated: ${document.lastModified}`;
}


// DOM Elements

const container = document.querySelector("#bookContainer");
const search = document.querySelector("#search");
const category = document.querySelector("#category");

const modal = document.querySelector("#bookModal");
const modalContent = document.querySelector("#modalContent");


// Store books
let books = [];


// =========================================
// Fetch Books From JSON
// =========================================

async function loadBooks() {

    try {

        const response = await fetch("data/books.json");


        if (!response.ok) {

            throw new Error(
                "Unable to load book data."
            );

        }


        books = await response.json();


        displayBooks(books);


    } catch (error) {


        if (container) {

            container.innerHTML = `

                <p class="center">
                    ${error.message}
                </p>

            `;

        }


        console.error(error);

    }

}


loadBooks();



// =========================================
// Display Books
// =========================================

function displayBooks(bookList) {


    if (!container) return;


    container.innerHTML = "";


    bookList.forEach(book => {


        const card = document.createElement("article");


        card.classList.add("book-card");



        card.innerHTML = `

            <img

                src="${book.image}"

                alt="${book.title}"

                width="300"

                height="420"

                loading="lazy">

            
            <div class="book-card-content">


                <h3>
                    ${book.title}
                </h3>


                <p>
                    <strong>
                    Author:
                    </strong>

                    ${book.author}
                </p>


                <p>
                    <strong>
                    Category:
                    </strong>

                    ${book.category}
                </p>


                <p>
                    <strong>
                    Price:
                    </strong>

                    $${book.price}
                </p>



                <button

                    class="button details-btn"

                    data-id="${book.id}">

                    View Details

                </button>


            </div>

        `;


        container.appendChild(card);


    });



    addBookEvents();


}




// =========================================
// Search and Category Filtering
// =========================================


if (search) {

    search.addEventListener(
        "input",
        filterBooks
    );

}


if (category) {

    category.addEventListener(
        "change",
        filterBooks
    );

}



function filterBooks() {


    const keyword =
        search.value.toLowerCase();



    const selectedCategory =
        category.value;



    const filteredBooks =
        books.filter(book => {


            const titleMatch =
                book.title
                .toLowerCase()
                .includes(keyword);



            const categoryMatch =
                selectedCategory === "all"
                ||
                book.category === selectedCategory;



            return titleMatch && categoryMatch;


        });



    displayBooks(filteredBooks);


}




// =========================================
// Book Details Buttons
// =========================================


function addBookEvents() {


    const buttons =
        document.querySelectorAll(
            ".details-btn"
        );



    buttons.forEach(button => {



        button.addEventListener(
            "click",
            () => {



                const bookId =
                    Number(
                        button.dataset.id
                    );



                const selectedBook =
                    books.find(
                        book =>
                        book.id === bookId
                    );



                if (!selectedBook) return;



                openBookModal(
                    selectedBook,
                    modal,
                    modalContent
                );



                setupFavoriteButton(
                    selectedBook
                );



            }
        );


    });


}




// =========================================
// Favorite Button
// =========================================


function setupFavoriteButton(book) {


    const favoriteButton =
        document.querySelector(
            "#favoriteBtn"
        );



    if (!favoriteButton) return;



    // Remove previous listener
    const newButton =
        favoriteButton.cloneNode(true);



    favoriteButton.replaceWith(
        newButton
    );



    newButton.addEventListener(
        "click",
        () => {


            const added =
                saveFavorite(book);



            if (added) {


                alert(
                    `"${book.title}" has been added to your favorites.`
                );


                modal.close();



            } else {


                alert(
                    `"${book.title}" is already in your favorites.`
                );


            }



        }
    );


}