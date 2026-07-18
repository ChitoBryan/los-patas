/* ============================================================
   LOS PATAS — Interacciones del sitio
   ============================================================ */
(function () {
  "use strict";

  const WHATSAPP_NUMBER = "50660676305";

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initButtonMicroInteractions();
    initWhatsAppFab();
  });

  /* -------- Menú móvil -------- */
  function initMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (!toggle || !mobileMenu) return;

    const icon = toggle.querySelector(".material-symbols-outlined");

    function closeMenu() {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
      if (icon) icon.textContent = "menu";
    }

    function openMenu() {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
      if (icon) icon.textContent = "close";
    }

    toggle.addEventListener("click", function () {
      if (mobileMenu.classList.contains("hidden")) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    // Cerrar al hacer clic en cualquier enlace del menú
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  /* -------- Envío del formulario por WhatsApp -------- */
  window.enviarWhatsApp = function (e) {
    e.preventDefault();
    const nombre = document.getElementById("f-nombre").value;
    const tel = document.getElementById("f-telefono").value;
    const msg = document.getElementById("f-mensaje").value;
    const texto = `Hola Los Patas! Soy ${nombre} (Tel: ${tel}). ${msg}`;
    window.open(
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(texto),
      "_blank"
    );
    return false;
  };

  /* -------- Ocultar botón flotante de WhatsApp al llegar al footer -------- */
  function initWhatsAppFab() {
    const fab = document.getElementById("wa-fab");
    const footer = document.querySelector("footer");
    if (!fab || !footer || !("IntersectionObserver" in window)) return;

    const hiddenClasses = ["opacity-0", "translate-y-4", "pointer-events-none"];

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            fab.classList.add(...hiddenClasses); // footer visible → ocultar
          } else {
            fab.classList.remove(...hiddenClasses); // footer fuera → mostrar
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(footer);
  }

  /* -------- Micro-interacción en botones -------- */
  function initButtonMicroInteractions() {
    document.querySelectorAll("button, .btn-racing-active").forEach(function (btn) {
      btn.addEventListener("mousedown", function () {
        btn.style.boxShadow = "2px 2px 0px #1A1A1A";
      });
      btn.addEventListener("mouseup", function () {
        btn.style.boxShadow = "4px 4px 0px #1A1A1A";
      });
    });
  }
})();
