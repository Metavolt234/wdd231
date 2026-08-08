import { initializeNavigation } from "./navigation.js";

initializeNavigation();

const year = document.querySelector("#year");
const modified = document.querySelector("#lastModified");
if (year) year.textContent = new Date().getFullYear();
if (modified) modified.textContent = `Updated ${new Date(document.lastModified).toLocaleDateString()}`;

const message = document.querySelector("#visitor-message");
if (message) {
  const key = "fagilLastVisit";
  const previous = localStorage.getItem(key);
  const now = Date.now();

  if (!previous) {
    message.textContent = "Welcome! This is your first visit to the library.";
  } else {
    const days = Math.floor((now - Number(previous)) / 86400000);
    message.textContent = days === 0
      ? "Welcome back! You visited earlier today."
      : days === 1
        ? "Welcome back! Your last visit was yesterday."
        : `Welcome back! Your last visit was ${days} days ago.`;
  }
  localStorage.setItem(key, String(now));
}
