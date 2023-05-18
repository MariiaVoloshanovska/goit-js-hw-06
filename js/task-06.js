//Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const focusGroup = document.querySelector("#validation-input");

const focusGroupAdventure = () => {
  const focusGroup = document.querySelector("#validation-input");
  if (focusGroup.value.length === Number(focusGroup.dataset.length)) {
    focusGroup.classList.add("valid");
    focusGroup.classList.remove("invalid");
  } else {
    focusGroup.classList.add("invalid");
  }
};

focusGroup.addEventListener("blur", focusGroupAdventure);
