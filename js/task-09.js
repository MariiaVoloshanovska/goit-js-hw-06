function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Напиши скрипт, який змінює кольори фону елемента
//< body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.

const modButton = document.querySelector(".change-color");
const ourBody = document.querySelector("body");

const randomColors = () => {
  ourBody.style.backgroundColor = getRandomHexColor();
};

modButton.addEventListener("click", randomColors);
