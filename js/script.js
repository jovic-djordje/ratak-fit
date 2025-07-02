const arrowDown = document.querySelector(".arrow-down-icon");
const arrowUp = document.querySelector(".arrow-up-icon");
const flipCard = document.querySelector(".flip-card");
const flipBtn = document.querySelector(".about-btn");

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
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", function () {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

//FUNKCIJA KOJA NA KLIK LINKOVA U MOBILE MENU UKLANJA MOBILE MENU I SKROLUJE DO SEKCIJE SA KOJOM JE LINK POVEZAN
const menuLinks = document.querySelectorAll(".off-screen-menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  });
});
