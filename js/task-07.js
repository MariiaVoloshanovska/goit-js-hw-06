//Напиши скрипт, який реагує на зміну значення input#font - size - control
//(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//перетягуючи повзунок, буде змінюватися розмір тексту.

const inputControl = document.querySelector("#font-size-control");
const textAbra = document.querySelector("#text");

inputControl.addEventListener("input", () => {
  textAbra.style.fontSize = `${inputControl.value}px`;
});
//функція виконується, коли подія відбувається стосовно елемента.
//button.addEventListener("click", () => {
//console.log("Button was clicked");
//});
//ТУТ коли до кнопки застосовується подія клікб викликається функція виводу в консоль тексту 'Button was clicked'
console.log(inputControl.value);
