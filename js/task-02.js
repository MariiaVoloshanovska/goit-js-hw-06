const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// отримати посилання на список
const ourIngredients = document.querySelector("#ingredients");

// отримати масив з елементами map, щоб не перебирати кожний через [0], [1], [2]
// створити масив з присвоєнням назв (текстовий вміст), та класу елементам списку і вивід в список
const elements = ingredients.map((ingredient) => {
  const makeNew = document.createElement("li");
  makeNew.textContent = ingredient;
  makeNew.classList.add("item");

  return makeNew;
});

// Розпакували масив з елементами в метод із обєктами (елементами)
ourIngredients.append(...elements);

// const ourIngredients = document.querySelector("#ingredients");

// const elements = ingredients.map((ingredient) => {
//   const makeNew = document.createElement("li");
//   makeNew.textContent = ingredient;
//   console.log(makeNew);
//   makeNew.classList.add("item");

//   ourIngredients.append(makeNew);
// });
// ourIngredients.append(...elements);
// const elements = document.querySelector(`#ingredients`);
// elements.append(...makeNew);
