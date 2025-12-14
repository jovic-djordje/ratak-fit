const arrowDown = document.querySelector(".arrow-down-icon");
const arrowUp = document.querySelector(".arrow-up-icon");
const flipCard = document.querySelector(".flip-card");
const flipBtn = document.querySelector(".about-btn");
const body = document.body; // Added this line

//FUNKCIJA KOJA ROTIRA KARTICU NA KLIK DUGMETA "PROCITAJ VISE"
flipBtn.addEventListener("click", () => {
  const card = flipCard.classList.toggle("flipped");

  if (card) {
    arrowUp.style.display = "block";
    arrowDown.style.display = "none";
  } else {
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
  }
});

//FUNKCIJA KOJA NA KLIK HAM IKONE PRIKAZUJE MOBILE MENU I X IKONU
const hamMenus = document.querySelectorAll(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenus.forEach((menu) => {
  menu.addEventListener("click", () => {
    offScreenMenu.classList.toggle("active");
    hamMenus.forEach((m) => m.classList.toggle("active"));
    body.classList.toggle("menu-active"); // Added this line - prevents scrolling
  });
});

//FUNKCIJA KOJA NA KLIK LINKOVA U MOBILE MENU UKLANJA MOBILE MENU I SKROLUJE DO SEKCIJE SA KOJOM JE LINK POVEZAN
const menuLinks = document.querySelectorAll(".off-screen-menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamMenus.forEach((m) => m.classList.remove("active")); // Fixed: use hamMenus instead of hamMenu
    offScreenMenu.classList.remove("active");
    body.classList.remove("menu-active"); // Added this line - restores scrolling
  });
});
