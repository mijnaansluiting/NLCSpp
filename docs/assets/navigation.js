window.addEventListener("DOMContentLoaded", () => {
  const origin = sessionStorage.getItem("origin");
  if (!origin) return;

  const nav = document.createElement("nav");
  nav.style.marginBottom = "10px";
  nav.innerHTML =
    '<a href="javascript:history.back()" style="font-size:14px;sertBefore(nav, document.body.firstChild);
});