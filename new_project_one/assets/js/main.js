/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const qualificationButton = document.querySelectorAll(".qualification__button"),
  qualificationContent = document.querySelectorAll(".qualification__content");

function toggleQualification() {
  let idName = this.id.toUpperCase();

  for (let i = 0; i < qualificationContent.length; i++) {
    if (qualificationContent[i].id === idName) {
      qualificationContent.forEach((element) => {
        element.classList.remove("qualification__content__active");
      });
      qualificationContent[i].classList.add("qualification__content__active");
    }
  }
  qualificationButton.forEach((element) => {
    element.classList.remove("qualification__button__active");
  });
  this.classList.add("qualification__button__active");
}

qualificationButton.forEach((element) => {
  element.addEventListener("click", toggleQualification);
});
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modalViews[i].classList.add("active-modal");
  });
});

modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener("click", () => {
    modalViews[i].classList.remove("active-modal");
  });
});
/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
