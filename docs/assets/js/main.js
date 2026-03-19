const menuButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const yearNodes = document.querySelectorAll(".year");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 760px)").matches) {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  });
}

if (yearNodes.length > 0) {
  const currentYear = new Date().getFullYear();
  yearNodes.forEach((node) => {
    node.textContent = String(currentYear);
  });
}
