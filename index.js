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

// PAGE SYSTEM

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

// UP SYSTEM

const boutonsUp = document.querySelectorAll(".ppcp-up");

const cards = [
  ".ppc-page-s",
  ".ppc-page-d",
  ".ppc-page-o",
  ".ppc-page-m",
  ".ppc-page-3",
  ".ppc-page-p",
  ".ppc-page-f",
  ".ppc-page-pr",
];

boutonsUp.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = document.querySelector(cards[index]);
    if (!card) return;

    if (card.scrollHeight > card.clientHeight) {
      card.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const topPosition = card.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  });
});
// CONTACT SYSTEM

document.getElementById("send-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // Récupération des valeurs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("mail").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Merci de remplir tous les champs avant d’envoyer.");
    return;
  }

  // Adresse où tu veux recevoir les messages
  const destinataire = "robin.courte@mail.com"; // <-- remplace par ton adresse !

  // Sujet et contenu du mail
  const subject = `Message de ${name}`;
  const body = `Nom / Entreprise : ${name}\nEmail : ${email}\n\nMessage :\n${message}`;

  // Création du lien mailto
  const mailtoLink = `mailto:${destinataire}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Ouvre le client mail
  window.location.href = mailtoLink;
});
