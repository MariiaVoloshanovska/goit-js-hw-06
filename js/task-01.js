// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// отримотримати посилання на список і елементи списку
const ourLists = document.querySelectorAll(".item");

// вивід в консоль рядка з кількістю категорій
console.log("Number of categories: " + ourLists.length);

// перебір категорій і вивід заголовків, та кількістю елементів в категорії
ourLists.forEach((ourList) => {
  console.log(`Category: ${ourList.firstElementChild.textContent}`);

  console.log(`Elements: ${ourList.lastElementChild.children.length}`);
});
