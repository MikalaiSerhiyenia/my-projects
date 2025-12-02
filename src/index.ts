// Получаем body
const body = document.body;
body.classList.add("page");

// Создаем wrapper
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

// --- Header ---
const header = document.createElement("header");
header.classList.add("header");

// --- Логотип ---
const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");

// Создаем изображение для логотипа
const logoImg = document.createElement("img");
logoImg.src = "https://storage.googleapis.com/plfpl-production-adobe-approved/plfpl-production/6663509/56a101a0-2b8e-4d7c-aafa-1d5ec95e93e2.png"; // путь к картинке
logoImg.alt = "My Projects Logo";  // альтернативный текст
logoImg.style.height = "40px"; // высота логотипа, можно изменить
logoImg.style.objectFit = "contain"; // чтобы картинка не искажалась

logoDiv.appendChild(logoImg);
header.appendChild(logoDiv);

// --- Меню ---
const nav = document.createElement("nav");
nav.classList.add("menu");

const ul = document.createElement("ul");
ul.classList.add("menu-list");

const links = [
  { text: "About", href: "#about" },
  { text: "Sites", href: "#sites" },
  { text: "Games", href: "#games" },
  { text: "Other", href: "#other" },
  { text: "Contacts", href: "#contacts" },
];

links.forEach(link => {
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

// --- Кнопка переключения темы с tooltip ---
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

// --- Main ---
const main = document.createElement("main");
main.classList.add("main");

// --- Footer ---
const footer = document.createElement("footer");
footer.classList.add("footer");

// --- Вкладываем все в wrapper ---
wrapper.appendChild(header);
wrapper.appendChild(main);
wrapper.appendChild(footer);

// --- Добавляем wrapper в body ---
body.appendChild(wrapper);
