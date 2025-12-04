import "./style.css";

// ======================================================
// 1. ИНИЦИАЛИЗАЦИЯ
// ======================================================

const body = document.body;
body.classList.add("page");

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

// ======================================================
// 2. HEADER (логотип + меню + тема)
// ======================================================

// --- код header без изменений ---
const header = document.createElement("header");
header.classList.add("header");

const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");

const logoImg = document.createElement("img");
logoImg.src = "./img/my-projects-logo.png";
logoImg.alt = "My Projects Logo";
logoImg.style.objectFit = "contain";

logoDiv.appendChild(logoImg);
header.appendChild(logoDiv);

const nav = document.createElement("nav");
nav.classList.add("menu");

const ul = document.createElement("ul");
ul.classList.add("menu-list");

const menuLinks = [
  { text: "About", href: "#about" },
  { text: "Sites", href: "#sites" },
  { text: "Games", href: "#games" },
  { text: "Other", href: "#other" },
  { text: "Contacts", href: "#contacts" },
];

menuLinks.forEach(link => {
  const li = document.createElement("li");
  li.classList.add("menu-item");

  const a = document.createElement("a");
  a.textContent = link.text;
  a.href = link.href;
  a.classList.add("menu-link");

  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);

const themeToggleBtn = document.createElement("button");
themeToggleBtn.textContent = "🌙";
themeToggleBtn.classList.add("theme-toggle");
themeToggleBtn.setAttribute("data-tooltip", "Switch to dark theme");

header.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    themeToggleBtn.textContent = "☀️";
    themeToggleBtn.setAttribute("data-tooltip", "Switch to light theme");
  } else {
    themeToggleBtn.textContent = "🌙";
    themeToggleBtn.setAttribute("data-tooltip", "Switch to dark theme");
  }
});

// ======================================================
// 3. MAIN (контент страницы)
// ======================================================

const main = document.createElement("main");
main.classList.add("main");

// --- 3.1. Секция с сайтами ---
const sitesSection = document.createElement("section");
sitesSection.classList.add("sites");

const sitesSectionHeader = document.createElement("h2");
sitesSectionHeader.classList.add("section-header");
sitesSectionHeader.textContent = 'Sites';

const sitesSectionContainer = document.createElement("div");
sitesSectionContainer.classList.add("sites-container");

// Данные сайтов
const siteCards = [
  {
    header: 'Portfolio',
    name: "portfolio",
    imgSrc: "./img/portfolio.png",
    url: "https://rolling-scopes-school.github.io/mikalaiserhiyenia-JSFE2025Q3/portfolio/"
  },
  {
    header: 'Coffee House',
    name: "coffee-shop",
    imgSrc: "./img/coffee-house.png",
    url: "https://rolling-scopes-school.github.io/mikalaiserhiyenia-JSFE2023Q4/coffee-house/"
  },
  {
    header: 'Christmas Shop',
    name: "christmas-shop",
    imgSrc: "./img/christmas-shop.png",
    url: "https://rolling-scopes-school.github.io/mikalaiserhiyenia-JSFE2024Q4/christmas-shop/home.html"
  }
];

// Создание карточек
siteCards.forEach(card => {
  const link = document.createElement("a");
  link.href = card.url;
  link.target = "_blank";
  link.classList.add("card-container");

  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("site-card");

  const img = document.createElement("img");
  img.src = card.imgSrc;
  img.alt = card.name;
  img.classList.add("site-screenshot");

  const cardHeader = document.createElement("h3");
  cardHeader.classList.add("card-header");
  cardHeader.textContent = card.header;

  cardWrapper.appendChild(img);
  link.append(cardWrapper, cardHeader);

  sitesSectionContainer.appendChild(link);
});

sitesSection.append(sitesSectionHeader, sitesSectionContainer);
main.appendChild(sitesSection);

// ======================================================
// 4. FOOTER (иконки + подсказки + авто-год)
// ======================================================

const footer = document.createElement("footer");
footer.classList.add("footer");

// Telegram
const tgWrapper = document.createElement("div");
tgWrapper.classList.add("footer-icon");
tgWrapper.dataset.tooltip = "@MklSrhn";

const tgImg = document.createElement("img");
tgImg.src = "./img/telegram-icon.png";
tgImg.alt = "Telegram";
tgWrapper.appendChild(tgImg);

// Авто-год
const yearDiv = document.createElement("div");
yearDiv.classList.add("footer-year");
yearDiv.textContent = `${new Date().getFullYear()}`;

// Email
const mailWrapper = document.createElement("div");
mailWrapper.classList.add("footer-icon");
mailWrapper.dataset.tooltip = "mikalai.serhiyenia@gmail.com\nmikalai.serhiyenia@yahoo.com\nmikalai.serhiyenia@yandex.com";

const mailImg = document.createElement("img");
mailImg.src = "./img/email-icon.png";
mailImg.alt = "Email";
mailWrapper.appendChild(mailImg);

// Сборка footer
footer.appendChild(tgWrapper);
footer.appendChild(yearDiv);
footer.appendChild(mailWrapper);

// ======================================================
// 5. СБОРКА СТРАНИЦЫ
// ======================================================

wrapper.appendChild(header);
wrapper.appendChild(main);
wrapper.appendChild(footer);

body.appendChild(wrapper);
