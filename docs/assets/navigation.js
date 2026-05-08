window.addEventListener("DOMContentLoaded", () => {
  // Toon geen navigatie als er geen terug-geschiedenis is
  if (window.history.length < 2) return;

  const nav = document.createElement("nav");
  nav.style.margin = "10px 0";
  nav.style.fontSize = "14px";

  const backLink = document.createElement("a");
  backLink.href = "#";
  backLink.innerHTML = "&larr; Terug"; // HTML-entity → voorkomt encoding issues
  backLink.addEventListener("click", event => {
    event.preventDefault();
    window.history.back();
  });

  nav.appendChild(backLink);
  document.body.insertBefore(nav, document.body.firstChild);
});