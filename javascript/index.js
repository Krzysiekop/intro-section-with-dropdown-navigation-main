const dropMenu = document.querySelector(".dropMenu");
const dropMenu2 = document.querySelector(".dropMenu2");

const dropMenuMobile = document.querySelector(".mobile_menu--dropMenu");
const dropMenuMobile2 = document.querySelector(".mobile_menu--dropMenu2");

const features = document.querySelector(".features");
const company = document.querySelector(".company");

const featuresMobile = document.querySelector(".mobile_menu--features");
const companyMobile = document.querySelector(".mobile_menu--company");

const featuresArrow = document.querySelector(".features__arrow");
const companyArrow = document.querySelector(".company__arrow");

const openMenu = document.querySelector(".hamburger_menu");

const featuresArrowMobile = document.querySelector(
  ".mobile_menu--features__arrow"
);
const companyArrowMobile = document.querySelector(
  ".mobile_menu--company__arrow"
);

features.addEventListener("mouseover", function () {
  dropMenu.style.visibility = "visible";
  dropMenu.style.opacity = "1";

  featuresArrow.setAttribute("src", "images/icon-arrow-up.svg");
});

dropMenu.addEventListener("mouseover", function () {
  dropMenu.style.visibility = "visible";
  dropMenu.style.opacity = "1";
  featuresArrow.setAttribute("src", "images/icon-arrow-up.svg");
});

features.addEventListener("mouseout", function () {
  dropMenu.style.visibility = "hidden";
  featuresArrow.setAttribute("src", "images/icon-arrow-down.svg");
});

dropMenu.addEventListener("mouseout", function () {
  dropMenu.style.visibility = "hidden";
  featuresArrow.setAttribute("src", "images/icon-arrow-down.svg");
});

company.addEventListener("mouseover", function () {
  dropMenu2.style.visibility = "visible";
  dropMenu2.style.opacity = "1";
  companyArrow.setAttribute("src", "images/icon-arrow-up.svg");
});

dropMenu2.addEventListener("mouseover", function () {
  dropMenu2.style.visibility = "visible";
  dropMenu2.style.opacity = "1";
  companyArrow.setAttribute("src", "images/icon-arrow-up.svg");
});

company.addEventListener("mouseout", function () {
  dropMenu2.style.visibility = "hidden";
  companyArrow.setAttribute("src", "images/icon-arrow-down.svg");
});

dropMenu2.addEventListener("mouseout", function () {
  dropMenu2.style.visibility = "hidden";
  companyArrow.setAttribute("src", "images/icon-arrow-down.svg");
});

const hamburgerMenu = document.querySelector(".hamburger_menu");

hamburgerMenu.addEventListener("click", function () {
  
  document.querySelector("body").style.opacity = "1";
  document.querySelector(".mobile_menu").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
  hamburgerMenuClose.style.display = "block";
});

const hamburgerMenuClose = document.querySelector(".hamburger_menu--close");

hamburgerMenuClose.addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector("body").style.opacity = "none";
  document.querySelector(".mobile_menu").style.display = "none";
  hamburgerMenuClose.style.display = "none";
});

featuresMobile.addEventListener("click", function () {
  if (window.getComputedStyle(dropMenuMobile).display === "none") {
    dropMenuMobile.style.display = "grid";
    featuresArrowMobile.setAttribute("src", "images/icon-arrow-up.svg");
  } else {
    dropMenuMobile.style.display = "none";
    featuresArrowMobile.setAttribute("src", "images/icon-arrow-down.svg");
  }
});

companyMobile.addEventListener("click", function () {
  if (window.getComputedStyle(dropMenuMobile2).display === "none") {
    dropMenuMobile2.style.display = "block";
    companyArrowMobile.setAttribute("src", "images/icon-arrow-up.svg");
  } else {
    dropMenuMobile2.style.display = "none";
    companyArrowMobile.setAttribute("src", "images/icon-arrow-down.svg");
  }
});
