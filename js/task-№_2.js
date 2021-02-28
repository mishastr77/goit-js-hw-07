const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredientRef = document.querySelector("#ingredients");

const listIngredientsRef = ingredients.map((item) => {
  const listRef = document.createElement("li");
  listRef.textContent = item;
  return listRef;
});

ulIngredientRef.append(...listIngredientsRef);
