const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ourIngredients = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const makeNew = document.createElement("li");
  makeNew.textContent = ingredient;
  console.log(makeNew);
  makeNew.classList.add("item");

  return makeNew;
});

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
