// Menu burger
const burger = document.querySelector(".burger");
const nav = document.querySelector(".site-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("active");
  });
});
