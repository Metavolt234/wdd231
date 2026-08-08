export function openBookModal(book, modal, modalContent, favoriteHandler) {
  if (!book || !modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-wrap">
      <div class="modal-top">
        <button class="modal-close" type="button" aria-label="Close book details">×</button>
      </div>
      <div class="modal-body">
        <img class="modal-cover" src="${book.image}" alt="${book.title} book cover" width="180" height="240">
        <div>
          <div class="eyebrow">${book.category}</div>
          <h2 id="modalTitle">${book.title}</h2>
          <p><strong>Author:</strong> ${book.author}</p>
          <div class="book-meta">
            <span class="badge">${book.category}</span>
            <span class="rating">★ ${Number(book.rating).toFixed(1)} / 5</span>
          </div>
          <p class="modal-description">${book.description}</p>
          <p><strong class="price">$${Number(book.price).toFixed(2)}</strong></p>
          <div class="modal-actions">
            <button id="favoriteBtn" class="button" type="button">♡ Save to favorites</button>
            <button class="button ghost modal-close" type="button">Close</button>
          </div>
        </div>
      </div>
    </div>`;

  modal.querySelectorAll(".modal-close").forEach(btn => btn.addEventListener("click", () => modal.close()));
  const favorite = modal.querySelector("#favoriteBtn");
  if (favorite && favoriteHandler) favorite.addEventListener("click", () => favoriteHandler(book, favorite));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  }, { once: true });

  modal.showModal();
}
