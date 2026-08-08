export function initializeNavigation() {
  const button = document.querySelector("#menu");
  const nav = document.querySelector("#navMenu");
  if (!button || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    button.textContent = open ? "×" : "☰";
  };

  setOpen(false);
  button.addEventListener("click", () => setOpen(!nav.classList.contains("open")));

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 700) setOpen(false);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) setOpen(false);
  });
}
