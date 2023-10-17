"use strict";

const bodyEl = document.body;
const headerEl = document.querySelector(".header");
const footerEl = document.querySelector(".footer");
const footerLogoEl = document.querySelector(".footer-logo");

const btnDark = document.querySelector(".dark-toogle");
const btnLight = document.querySelector(".light-toogle");

const switchMode = function () {
  bodyEl.classList.toggle("dark-body");
  headerEl.classList.toggle("dark-header");
  footerEl.classList.toggle("dark-footer");
  footerLogoEl.classList.toggle("dark-footer");
};

btnDark.addEventListener("click", function () {
  btnDark.classList.toggle("hidden");
  btnLight.classList.toggle("hidden");
  switchMode();
});

btnLight.addEventListener("click", function () {
  btnDark.classList.toggle("hidden");
  btnLight.classList.toggle("hidden");
  switchMode();
});
