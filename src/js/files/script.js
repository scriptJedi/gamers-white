// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Функция для генерации инициалов
function generateInitials() {
  const initialsElements = document.querySelectorAll(".testimonials__initials");

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
  generateInitials();
}

document.addEventListener("DOMContentLoaded", main);
