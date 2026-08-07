import { initializeNavigation } from "./navigation.js";
initializeNavigation();

const year = document.querySelector("#year");
const modified = document.querySelector("#lastModified");
if (year) year.textContent = new Date().getFullYear();
if (modified) modified.textContent = `Updated ${new Date(document.lastModified).toLocaleDateString()}`;

const params = new URLSearchParams(window.location.search);
["fullname","email","phone","book","message"].forEach(field => {
  const element = document.querySelector(`#${field}`);
  if (element) element.textContent = params.get(field)?.trim() || "Not provided";
});
