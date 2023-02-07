// HTML містить порожній список ul#ingredients.

//Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");
console.log(list);

let item = ingredients.map((ingredient) => {
  let createItem = document.createElement("li");
  createItem.setAttribute("class", "item");
  createItem.textContent = ingredient;
  return createItem;
});
list.append(...item);
