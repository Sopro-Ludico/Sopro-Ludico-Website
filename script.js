const translations = {
  pt: {
    pageTitle: "Sopro Lúdico | My Dress-Up Dungeon",
    seoDescription: "Conheça My Dress-Up Dungeon, o novo jogo em desenvolvimento pela Sopro Lúdico. Acompanhe o projeto na Steam (Em breve) e no itch.io.",
    socialDescription: "Conheça My Dress-Up Dungeon, o novo jogo em desenvolvimento pela Sopro Lúdico.",
    studioDescription: "Estúdio independente brasileiro de desenvolvimento de jogos.",
    development: "Em desenvolvimento",
    gameDescription: "Acompanhe o desenvolvimento e adicione à sua lista de desejos.",
    languageSelector: "Selecionar idioma",
    studioLinks: "Links do estúdio",
    socialNetworks: "Redes sociais",
    gameOnSteam: "Ver o jogo na Steam (Em breve)",
    steamComingSoon: "Steam (Em breve)",
    gameOnItch: "Ver o jogo no itch.io",
    gameArtAlt: "Arte de My Dress-Up Dungeon",
    instagramLabel: "Instagram do Sopro Lúdico",
    twitterLabel: "X ou Twitter do Sopro Lúdico",
    blueskyLabel: "Bluesky do Sopro Lúdico",
    facebookLabel: "Facebook do Sopro Lúdico",
    itchLabel: "Página do Sopro Lúdico no itch.io",
    steamLabel: "Página do Sopro Lúdico na Steam (Em breve)"
  },
  en: {
    pageTitle: "Sopro Lúdico | My Dress-Up Dungeon",
    seoDescription: "Discover My Dress-Up Dungeon, the new game in development by Sopro Lúdico. Follow the project on Steam (Soon) and itch.io.",
    socialDescription: "Discover My Dress-Up Dungeon, the new game in development by Sopro Lúdico.",
    studioDescription: "Independent Brazilian game development studio.",
    development: "In development",
    gameDescription: "Follow the development and add our new game to your wishlist.",
    languageSelector: "Select language",
    studioLinks: "Studio links",
    socialNetworks: "Social media",
    gameOnSteam: "View the game on Steam (Soon)",
    steamComingSoon: "Steam (Soon)",
    gameOnItch: "View the game on itch.io",
    gameArtAlt: "My Dress-Up Dungeon artwork",
    instagramLabel: "Sopro Lúdico on Instagram",
    twitterLabel: "Sopro Lúdico on X or Twitter",
    blueskyLabel: "Sopro Lúdico on Bluesky",
    facebookLabel: "Sopro Lúdico on Facebook",
    itchLabel: "Sopro Lúdico on itch.io",
    steamLabel: "Sopro Lúdico on Steam (Soon)"
  }
};

const languageButtons = document.querySelectorAll("[data-language]");

function applyLanguage(language, savePreference = false) {
  const selectedLanguage = translations[language] ? language : "en";
  const messages = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage === "pt" ? "pt-BR" : "en";
  document.title = messages.pageTitle;
  document.querySelector('meta[name="description"]').content = messages.seoDescription;
  document.querySelector('meta[property="og:title"]').content = messages.pageTitle;
  document.querySelector('meta[property="og:description"]').content = messages.socialDescription;
  document.querySelector('meta[property="og:locale"]').content = selectedLanguage === "pt" ? "pt_BR" : "en_US";
  document.querySelector('meta[name="twitter:title"]').content = messages.pageTitle;
  document.querySelector('meta[name="twitter:description"]').content = messages.socialDescription;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = messages[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", messages[element.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", messages[element.dataset.i18nAlt]);
  });
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === selectedLanguage;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
  });

  if (savePreference) localStorage.setItem("sopro-ludico-language", selectedLanguage);
}

const storedLanguage = localStorage.getItem("sopro-ludico-language");
const browserLanguages = navigator.languages || [navigator.language || "en"];
const browserUsesPortuguese = browserLanguages.some((language) =>
  language.toLowerCase().startsWith("pt")
);
const initialLanguage = storedLanguage || (browserUsesPortuguese ? "pt" : "en");

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
});

applyLanguage(initialLanguage);
document.getElementById("year").textContent = new Date().getFullYear();
