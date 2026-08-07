// ==========================================
// modal.js
// Fagil Manday Library
// Handles Book Details Modal
// ==========================================


export function openBookModal(book, modal, modalContent) {


    // Check elements exist

    if (!book || !modal || !modalContent) {

        console.error(
            "Modal elements missing."
        );

        return;

    }



    // Create modal content

    modalContent.innerHTML = `


        <img

            src="${book.image}"

            alt="${book.title}"

            width="250"

            height="350"

            loading="lazy">


        <h2>
            ${book.title}
        </h2>



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



        <p>

            <strong>
            Rating:
            </strong>

            ⭐ ${book.rating}

        </p>



        <p>

            ${book.description}

        </p>



        <button

            id="favoriteBtn"

            class="button">

            Add to Favorites

        </button>


    `;



    // Open modal

    modal.showModal();



    setupModalAccessibility(modal);


}




// ==========================================
// Accessibility Controls
// ==========================================


function setupModalAccessibility(modal) {



    // Close with Escape key

    const escapeHandler =
        (event) => {


            if (event.key === "Escape") {


                modal.close();


                document.removeEventListener(
                    "keydown",
                    escapeHandler
                );


            }


        };



    document.addEventListener(
        "keydown",
        escapeHandler
    );



    // Close clicking outside dialog


    modal.addEventListener(

        "click",

        (event) => {


            const dialog =
                modal.getBoundingClientRect();



            const outsideClick =

                event.clientX < dialog.left ||

                event.clientX > dialog.right ||

                event.clientY < dialog.top ||

                event.clientY > dialog.bottom;



            if (outsideClick) {


                modal.close();


            }


        },

        {
            once: true
        }

    );


}