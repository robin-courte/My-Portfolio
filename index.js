const HomeButton = document.querySelector(".hp-button");
const HomePage = document.querySelector(".home-page");
const PortfolioPage = document.querySelector(".portfolio-page");
const Navbar = document.querySelector(".navbar");

HomeButton.onclick = function () {
  HomePage.classList.toggle("open");
  PortfolioPage.classList.toggle("open");
  Navbar.classList.toggle("open");
};

// ARROWS SYSTEM

const ArrowAbout = document.querySelector(".ppda-about");
const ArrowContact = document.querySelector(".ppda-contact");
const ArrowPortfolioC = document.querySelector(".ppda-portfolio-c");
const ArrowPortfolioA = document.querySelector(".ppda-portfolio-a");
const ContactPage = document.querySelector(".contact-page");
const AboutPage = document.querySelector(".about-page");

ArrowAbout.onclick = function () {
  PortfolioPage.classList.remove("open");
  AboutPage.classList.toggle("open");
};

ArrowContact.onclick = function () {
  PortfolioPage.classList.remove("open");
  ContactPage.classList.toggle("open");
};

ArrowPortfolioC.onclick = function () {
  PortfolioPage.classList.toggle("open");
  ContactPage.classList.remove("open");
};

ArrowPortfolioA.onclick = function () {
  PortfolioPage.classList.toggle("open");
  AboutPage.classList.remove("open");
};

document.addEventListener("DOMContentLoaded", () => {
  const discoverButtons = document.querySelectorAll(
    '[class*="ppcf-b-discover-"]'
  );
  const backButton = document.querySelector(".ppc-back");
  const allPages = document.querySelectorAll('[class*="ppc-page-"]');

  // Fonction pour ouvrir une page
  const openPage = (id) => {
    // Empêche le scroll global
    document.body.style.overflow = "hidden";

    // Ferme toutes les pages ouvertes
    allPages.forEach((page) => {
      page.classList.remove("open");
      page.style.overflowY = ""; // reset
      page.style.maxHeight = "";
    });

    // Ouvre la page correspondante
    const pageToOpen = document.querySelector(`.ppc-page-${id}`);
    if (pageToOpen) {
      pageToOpen.classList.add("open");

      // Active le scroll interne
      pageToOpen.style.overflowY = "auto";
      pageToOpen.style.maxHeight = "100vh";
    }

    // Ouvre le fond arrière
    backButton?.classList.add("open");
  };

  // Fonction pour fermer toutes les pages
  const closePages = () => {
    allPages.forEach((page) => {
      page.classList.remove("open");
      page.style.overflowY = "";
      page.style.maxHeight = "";
    });

    // Réactive le scroll du body
    document.body.style.overflow = "";

    // Ferme le fond arrière
    backButton?.classList.remove("open");
  };

  // Gestion des clics sur les boutons "discover"
  discoverButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const match = btn.className.match(/ppcf-b-discover-([a-zA-Z0-9_-]+)/);
      if (!match) return;
      const id = match[1];

      openPage(id);
    });
  });

  // Gestion des clics sur le bouton "retour"
  backButton?.addEventListener("click", closePages);

  // Si tu veux aussi des boutons de retour internes :
  document.querySelectorAll('[class*="ppcp-return-"]').forEach((ret) => {
    ret.addEventListener("click", closePages);
  });
});
