// ==========================================
// storage.js
// Handles Favorite Books in Local Storage
// ==========================================

const STORAGE_KEY = "favoriteBooks";

// Get all favorite books
export function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Save a book
export function saveFavorite(book) {

    const favorites = getFavorites();

    const exists = favorites.some(item => item.id === book.id);

    if (exists) {
        return false;
    }

    favorites.push(book);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favorites)
    );

    return true;
}

// Remove a favorite
export function removeFavorite(id) {

    const favorites = getFavorites().filter(book => book.id !== id);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favorites)
    );
}

// Check if favorite
export function isFavorite(id) {

    return getFavorites().some(book => book.id === id);

}

// Clear all favorites
export function clearFavorites() {

    localStorage.removeItem(STORAGE_KEY);

}