let menu = document.querySelector(".menu-link");
let laptopModal = document.querySelector(".laptop-modal");
let closeBtn = document.querySelector(".close-btn");
let menu2 = document.querySelector("#menu2");

menu.addEventListener("click", () => {
  laptopModal.classList.add("open");
});
menu2.addEventListener("click", () => {
  laptopModal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  laptopModal.classList.remove("open");
});

const body = document.getElementsByTagName("body");
let loginModal = document.querySelector(".login-modal");
let loginLink = document.querySelector("#login");
let loginClose = document.querySelector(".login-close_btn");
loginLink.addEventListener("click", () => {
  loginModal.style.top = "170px";
});

loginClose.addEventListener("click", () => {
  loginModal.style.top = "-600px";
});
