//Напиши скрипт управління формою логіна.

//Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//Під час відправлення форми сторінка не повинна перезавантажуватися.
//Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
//Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const logForm = document.querySelector(".login-form");
// Додати слухача до форми
logForm.addEventListener("submit", (event) => {
  //  Отримати доступ до елементів форми
  const emailInput = logForm.elements.email;
  const passwordInput = logForm.elements.password;
  // скасування
  event.preventDefault();
  // Перевірка
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Attention! You must fill in all fields!");
    return;
  } else {
    const newForm = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(newForm);
    // Очиститка
    logForm.reset();
  }
});

// const form = document.querySelector(".login-form");
// const inputs = document.querySelectorAll("input");

// const newForm = (event) => {
//   event.preventDefault();

//   const { email, password } = event.target.elements;
//   if (email.value === "" || password.value.length === 0) {
//     return alert("Attention! You must fill in all fields!");
//   }
//   // Створити об'єкт з введеними даними
//   const formData = {
//     email: email.value,
//     password: password.value,
//   };
// };
// // Вивести дані в консоль
// console.log(formData);

// form.addEventListener("submit", newForm);
