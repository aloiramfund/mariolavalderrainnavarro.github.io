document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  const form = document.querySelector("#consultation-form");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Consulta desde la web");
      const body = encodeURIComponent(
        `Nombre: ${data.get("nombre") || ""}\n` +
        `Email: ${data.get("email") || ""}\n` +
        `Tipo de proyecto: ${data.get("tipo") || ""}\n\n` +
        `Mensaje:\n${data.get("mensaje") || ""}`
      );
      window.location.href = `mailto:aloiramfund@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
