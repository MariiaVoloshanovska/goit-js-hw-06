//Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// отримати посилання на input
const focusGroup = document.querySelector("#validation-input");

// порівняти кількість символів в input(input.value) зі значеннямм dataLength (значення 'dataLength' перетворити на число).
// Присвоїти клас відповідний клас(true - valid, false - invalid)
const focusGroupAdventure = () => {
  const focusGroup = document.querySelector("#validation-input");
  if (focusGroup.value.length === Number(focusGroup.dataset.length)) {
    focusGroup.classList.add("valid");
    focusGroup.classList.remove("invalid");
  } else {
    focusGroup.classList.add("invalid");
  }
};

// додати до 'input' слухача, для спостереження за втратою фокуса, з колбеком  (порівняння з dataLength)
input.addEventListener("blur", oninputBlur);
focusGroup.addEventListener("blur", focusGroupAdventure);
