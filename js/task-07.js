//Напиши скрипт, який реагує на зміну значення input#font - size - control
//(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//перетягуючи повзунок, буде змінюватися розмір тексту.

// отримати посилання на input та span
const inputControl = document.querySelector("#font-size-control");
const textAbra = document.querySelector("#text");

// в функії , для розміру текста спану присвоїти значення розміру input з 'px'
const changeSize = () => {
  textAbra.style.fontSize = `${inputControl.value}px`;
};

// додати до input слухача з колбеком
inputControl.addEventListener("input", changeSize);
console.log(inputControl.value);

// short variant

// inputControl.addEventListener("input", () => {
//   textAbra.style.fontSize = `${inputControl.value}px`;
// });
// console.log(inputControl.value);

//функція виконується, коли подія відбувається стосовно елемента.
// button.addEventListener("click", () => {
// console.log("Button was clicked");
// });

//ТУТ коли до кнопки застосовується подія клікб викликається функція виводу в консоль тексту 'Button was clicked'
