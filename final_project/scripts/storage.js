const STORAGE_KEY = "favoriteBooks";

export function getFavorites() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
export function saveFavorite(book) {
  const favorites = getFavorites();
  if (favorites.some(item => item.id === book.id)) return false;
  favorites.push(book);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  return true;
}
export function removeFavorite(id) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getFavorites().filter(book => book.id !== id)));
}
export function isFavorite(id) {
  return getFavorites().some(book => book.id === id);
}
export function clearFavorites() {
  localStorage.removeItem(STORAGE_KEY);
}
