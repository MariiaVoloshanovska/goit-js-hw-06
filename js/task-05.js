//Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

//отримати посилання на input та span
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// задати значення спану при пустому інпуті, додати текст в спан
const onInputChange = () => {
  textInput.value.length === 0 ? (output.textContent = "Anonymous") : (output.textContent = textInput.value);
};

//  додати слухача на інпут, перевірити поточне значення інпуту,
textInput.addEventListener("input", onInputChange);
