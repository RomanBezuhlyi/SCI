// Отримуємо елементи
const burgerButton = document.querySelector(".header__burger");
const closeButton = document.querySelector(".header__close");
const navigation = document.querySelector(".header__navigation");
const body = document.body;

// Функція для відкриття меню
const openMenu = () => {
  navigation.classList.add("open");
  body.style.overflow = "hidden"; // Заблокувати прокручування
};

// Функція для закриття меню
const closeMenu = () => {
  navigation.classList.remove("open");
  body.style.overflow = "auto"; // Відновити прокручування
};

// Додаємо обробники подій
burgerButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

// Закриття меню при натисканні на посилання в меню
const navLinks = document.querySelectorAll(".header__nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
