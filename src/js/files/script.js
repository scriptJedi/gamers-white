import { isMobile } from "./functions.js";
import { flsModules } from "./modules.js";

function generateInitials(selector) {
  const initialsElements = document.querySelectorAll(selector);

  initialsElements.forEach((element) => {
    const fullName = element.dataset.name;
    if (fullName) {
      const names = fullName.split(" ");
      if (names.length >= 2) {
        const initials = `${names[0][0]}${names[1][0]}`;
        element.textContent = initials;
      }
    }
  });
}

// Cookies functionality
function initCookiesConsent() {
  const cookiesBlock = document.querySelector(".cookies");
  if (!cookiesBlock) return;

  const acceptBtn = cookiesBlock.querySelector(".cookies__button_accept");
  const declineBtn = cookiesBlock.querySelector(".cookies__button_decline");

  // Check if user already made a choice
  if (localStorage.getItem("cookiesConsent")) {
    cookiesBlock.style.display = "none";
    return;
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesConsent", "accepted");
    cookiesBlock.style.display = "none";
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesConsent", "declined");
    cookiesBlock.style.display = "none";
  });
}

function main() {
  generateInitials(".testimonials__initials");
  generateInitials(".member__initials");
  initCookiesConsent();
}

document.addEventListener("DOMContentLoaded", main);
