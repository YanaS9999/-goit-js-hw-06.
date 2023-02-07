/*Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
 і виводить значення кольору в span.color.
*/
const btn = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
const colorEl = document.querySelector("body");

btn.addEventListener("click", () => {
  textEl.textContent = getRandomHexColor();
  colorEl.style.backgroundColor = textEl.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
