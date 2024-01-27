let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".header-menu");
let bod = document.querySelector(".container");
let phone = document.querySelector(".header-contact");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  nav.classList.toggle("active");
  phone.classList.toggle("active");
});
