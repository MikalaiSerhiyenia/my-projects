import "./style.css";

// ======================================================
// 1. БАЗОВЫЕ УТИЛИТЫ
// ======================================================

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  attrs?: Partial<HTMLElementTagNameMap[K]> | Record<string, string>
) {
  const element = document.createElement(tag);
  if (className) element.className = className;

  if (attrs) {
    for (const key in attrs) {
      // @ts-ignore
      element[key] = attrs[key];
    }
  }
  return element;
}

// Создание простой секции без уникального контента
function createSimpleSection(id: string, title: string): HTMLElement {
  const section = el("section", id);
  section.id = id;

  const header = el("h2", "section-header", { textContent: title });
  const container = el("div", `${id}-container`);

  section.append(header, container);
  return section;
}

// ======================================================
// 2. ИНИЦИАЛИЗАЦИЯ
// ======================================================

const body = document.body;
body.classList.add("page");

const wrapper = el("div", "wrapper");

// ======================================================
// 3. HEADER
// ======================================================

const header = el("header", "header");

// Logo
const logoDiv = el("div", "logo");
const logoImg = el("img") as HTMLImageElement;
logoImg.src = "./img/my-projects-logo.png";
logoImg.alt = "My Projects Logo";
logoImg.style.objectFit = "contain";
logoDiv.appendChild(logoImg);

header.appendChild(logoDiv);

// Menu
const nav = el("nav", "menu");
const ul = el("ul", "menu-list");

[
  { text: "About", href: "#about" },
  { text: "Sites", href: "#sites" },
  { text: "Games", href: "#games" },
  { text: "Other", href: "#other" },
  { text: "Contacts", href: "#contacts" },
].forEach(({ text, href }) => {
  const li = el("li", "menu-item");
  const a = el("a", "menu-link", { href, textContent: text });
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);

// Theme toggle
const themeToggleBtn = el("button", "theme-toggle", {
  textContent: "🌙",
});
themeToggleBtn.setAttribute("data-tooltip", "Switch to dark theme");

themeToggleBtn.addEventListener("click", () => {
  const dark = body.classList.toggle("dark-theme");
  themeToggleBtn.textContent = dark ? "☀️" : "🌙";
  themeToggleBtn.setAttribute(
    "data-tooltip",
    dark ? "Switch to light theme" : "Switch to dark theme"
  );
});

header.appendChild(themeToggleBtn);

// ======================================================
// 4. MAIN
// ======================================================

const main = el("main", "main");

// =============== ABOUT SECTION =========================
const aboutSection = createSimpleSection("about", "About");
main.appendChild(aboutSection);

// =============== SITES SECTION =========================
const sitesSection = el("section", "sites");
sitesSection.id = "sites";

const sitesHeader = el("h2", "section-header", {
  textContent: "Sites",
});
const sitesContainer = el("div", "sites-container");

[
  {
    header: "Portfolio",
    name: "portfolio",
    imgSrc: "./img/portfolio.png",
    url: "https://rolling-scopes-school.github.io/mikalaiserhiyenia-JSFE2025Q3/portfolio/",
  },
  {
    header: "Coffee House",
    name: "coffee-shop",
    imgSrc: "./img/coffee-house.png",
    url: "https://rolling-scopes-school.github.io/mikalaiserhiyenia-JSFE2023Q4/coffee-house/",
  },
  {
    header: "Christmas Shop",
    name: "christmas-shop",
    imgSrc: "./img/christmas-shop.png",
    url: "https://rolling-scopes-school.github.io/mikalaiserhiyenia-JSFE2024Q4/christmas-shop/home.html",
  },
].forEach((card) => {
  const link = el("a", "card-container", { href: card.url, target: "_blank" });

  const cardWrapper = el("div", "site-card");
  const img = el("img", "site-screenshot", {
    src: card.imgSrc,
    alt: card.name,
  }) as HTMLImageElement;

  const cardHeader = el("h3", "card-header", { textContent: card.header });

  cardWrapper.appendChild(img);
  link.append(cardWrapper, cardHeader);
  sitesContainer.appendChild(link);
});

sitesSection.append(sitesHeader, sitesContainer);
main.appendChild(sitesSection);

// =============== GAMES SECTION =========================

const gamesSection = el("section", "games");
gamesSection.id = "games";

const gamesHeader = el("h2", "section-header", {
  textContent: "Games",
});
const gamesContainer = el("div", "games-container");

[
  {
    header: "Hangman",
    name: "hangman",
    imgSrc: "./img/hangman.png",
    url: "https://rolling-scopes-school.github.io/mikalaiserhiyenia-JSFE2023Q4/hangman/",
  },
  {
    header: "Nonograms",
    name: "nonograms",
    imgSrc: "./img/nonograms.png",
    url: "https://rolling-scopes-school.github.io/mikalaiserhiyenia-JSFE2023Q4/nonograms/",
  },
  {
    header: "Pair 'em up",
    name: "pair-em-up",
    imgSrc: "./img/pair-em-up.png",
    url: "https://rolling-scopes-school.github.io/mikalaiserhiyenia-JSFE2025Q3/pair-em-up/",
  },
].forEach((card) => {
  const link = el("a", "card-container", { href: card.url, target: "_blank" });

  const cardWrapper = el("div", "game-card");
  const img = el("img", "game-screenshot", {
    src: card.imgSrc,
    alt: card.name,
  }) as HTMLImageElement;

  const cardHeader = el("h3", "card-header", { textContent: card.header });

  cardWrapper.appendChild(img);
  link.append(cardWrapper, cardHeader);
  gamesContainer.appendChild(link);
});

gamesSection.append(gamesHeader, gamesContainer);
main.appendChild(gamesSection);

// =============== OTHER SECTION =========================
const otherSection = createSimpleSection("other", "Other");
main.appendChild(otherSection);

// ======================================================
// 5. FOOTER
// ======================================================

const footer = el("footer", "footer");
footer.id = 'contacts';

function createFooterIcon(imgSrc: string, alt: string, tooltip: string) {
  const wrap = el("div", "footer-icon");
  wrap.dataset.tooltip = tooltip;

  const img = el("img") as HTMLImageElement;
  img.src = imgSrc;
  img.alt = alt;

  wrap.appendChild(img);
  return wrap;
}

footer.appendChild(
  createFooterIcon("./img/telegram-icon.png", "Telegram", "@MklSrhn")
);
footer.appendChild(
  createFooterIcon("./img/phone-icon.png", "Phone", "+375(29)566-22-68")
);
footer.appendChild(
  createFooterIcon(
    "./img/email-icon.png",
    "Email",
    "mikalai.serhiyenia@gmail.com\nmikalai.serhiyenia@yahoo.com\nmikalai.serhiyenia@yandex.com"
  )
);
footer.appendChild(
  el("div", "footer-year", { textContent: `${new Date().getFullYear()}` })
);

// ======================================================
// 6. СБОРКА
// ======================================================

wrapper.append(header, main, footer);
body.appendChild(wrapper);
