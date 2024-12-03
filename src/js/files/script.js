// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Функция для генерации инициалов
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

function main() {
  generateInitials(".testimonials__initials");
  generateInitials(".member__initials");
}

document.addEventListener("DOMContentLoaded", main);
