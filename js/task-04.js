//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

const firstButton = document.querySelector('[data-action = "decrement"]');
const secondButton = document.querySelector('[data-action = "increment"]');
const ourSpan = document.querySelector("#value");

let counterValue = 0;

firstButton.addEventListener("click", (eventFirst) => ((counterValue -= 1), (ourSpan.textContent = counterValue)));

secondButton.addEventListener("click", (eventSecond) => ((counterValue += 1), (ourSpan.textContent = counterValue)));

console.log(counterValue);
