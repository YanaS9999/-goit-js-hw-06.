/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
 перевіряє його вміст щодо правильної кількості введених символів.
*/
/*    Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
    Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

    Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
 */
const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (textInput.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove("invalid");
    return textInput.classList.add("valid");
  }
  return textInput.classList.add("invalid");
});
