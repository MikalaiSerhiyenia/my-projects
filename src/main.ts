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

const header = document.createElement("header");
header.classList.add("header");


// --- 2.1. Логотип ---
const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");

const logoImg = document.createElement("img");
logoImg.src = "./img/my-projects-logo.png";
logoImg.alt = "My Projects Logo";
logoImg.style.objectFit = "contain";

logoDiv.appendChild(logoImg);
header.appendChild(logoDiv);


// --- 2.2. Меню ---
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


// --- 2.3. Кнопка переключения темы ---
const themeToggleBtn = document.createElement("button");
themeToggleBtn.textContent = "🌙";
themeToggleBtn.classList.add("theme-toggle");
themeToggleBtn.setAttribute("data-tooltip", "Switch to dark theme");

header.appendChild(themeToggleBtn);

// Логика переключения темы
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



// ======================================================
// 4. FOOTER (иконки + подсказки + авто-год)
// ======================================================

const footer = document.createElement("footer");
footer.classList.add("footer");


// --- 4.1. Telegram icon + tooltip ---
const tgWrapper = document.createElement("div");
tgWrapper.classList.add("footer-icon");
tgWrapper.dataset.tooltip = "@MklSrhn";

const tgImg = document.createElement("img");
tgImg.src = "./img/telegram-icon.png";
tgImg.alt = "Telegram";
tgWrapper.appendChild(tgImg);


// --- 4.2. Автоматический год ---
const yearDiv = document.createElement("div");
yearDiv.classList.add("footer-year");
yearDiv.textContent = `${new Date().getFullYear().toString()}`;


// --- 4.3. Email icon + tooltip ---
const mailWrapper = document.createElement("div");
mailWrapper.classList.add("footer-icon");
mailWrapper.dataset.tooltip = "mikalai.serhiyenia@gmail.com\nmikalai.serhiyenia@yahoo.com\nmikalai.serhiyenia@yandex.com";

const mailImg = document.createElement("img");
mailImg.src = "./img/email-icon.png";
mailImg.alt = "Email";
mailWrapper.appendChild(mailImg);


// Собираем footer
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