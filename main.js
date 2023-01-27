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

$(".products_list").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
const prevBtn = document.querySelector(".slick-prev");
prevBtn.textContent = "";
const nextBtn = document.querySelector(".slick-next");
nextBtn.textContent = "";
