import { initializeNavigation } from "./navigation.js";
import { openBookModal } from "./modal.js";
import { saveFavorite, isFavorite } from "./storage.js";

initializeNavigation();

const container = document.querySelector("#bookContainer");
const search = document.querySelector("#search");
const category = document.querySelector("#category");
const modal = document.querySelector("#bookModal");
const resultsCount = document.querySelector("#resultsCount");
const year = document.querySelector("#year");
const modified = document.querySelector("#lastModified");

if (year) year.textContent = new Date().getFullYear();
if (modified) modified.textContent = `Updated ${new Date(document.lastModified).toLocaleDateString()}`;

let books = [];

async function loadBooks() {
  try {
    const response = await fetch("data/books.json");
    if (!response.ok) throw new Error("Unable to load the book collection.");
    books = await response.json();
    populateCategories();
    displayBooks(books);
  } catch (error) {
    container.innerHTML = `<div class="empty-state"><h3>Collection unavailable</h3><p>${error.message}</p></div>`;
    if (resultsCount) resultsCount.textContent = "Unable to load books";
  }
}

function populateCategories() {
  [...new Set(books.map(book => book.category))].sort().forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    category.appendChild(option);
  });
}

function displayBooks(list) {
  container.innerHTML = "";
  if (resultsCount) resultsCount.textContent = `${list.length} ${list.length === 1 ? "book" : "books"} found`;

  if (!list.length) {
    container.innerHTML = `<div class="empty-state"><h3>No books found</h3><p>Try another title or choose a different category.</p></div>`;
    return;
  }

  list.forEach(book => {
    const card = document.createElement("article");
    card.className = "book-card";
    const saved = isFavorite(book.id);
    card.innerHTML = `
      <div class="book-cover">
        <img src="${book.image}" alt="${book.title} book cover" width="300" height="400" loading="lazy">
      </div>
      <div class="book-card-content">
        <h3>${book.title}</h3>
        <p class="author">by ${book.author}</p>
        <div class="book-meta">
          <span class="badge">${book.category}</span>
          <span class="rating">★ ${Number(book.rating).toFixed(1)}</span>
        </div>
        <div class="price-row">
          <span class="price">$${Number(book.price).toFixed(2)}</span>
          <button class="button secondary details-btn" type="button" data-id="${book.id}">Details</button>
        </div>
        ${saved ? '<small style="display:block;margin-top:.65rem;color:#16734a;font-weight:700">✓ Saved to favorites</small>' : ""}
      </div>`;
    container.appendChild(card);
  });

  container.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
      const book = books.find(item => item.id === Number(button.dataset.id));
      if (!book) return;
      openBookModal(book, modal, document.querySelector("#modalContent"), (selected, favoriteButton) => {
        const added = saveFavorite(selected);
        favoriteButton.textContent = added ? "✓ Saved to favorites" : "✓ Already saved";
        favoriteButton.disabled = true;
        if (added) displayBooks(getFilteredBooks());
      });
    });
  });
}

function getFilteredBooks() {
  const keyword = search.value.trim().toLowerCase();
  const selected = category.value;
  return books.filter(book =>
    book.title.toLowerCase().includes(keyword) &&
    (selected === "all" || book.category === selected)
  );
}
function filterBooks() { displayBooks(getFilteredBooks()); }

search.addEventListener("input", filterBooks);
category.addEventListener("change", filterBooks);

loadBooks();
