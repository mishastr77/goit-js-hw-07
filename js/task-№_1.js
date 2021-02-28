const ulRef = document.querySelector("#categories");
const liInCategoriesRef = ulRef.querySelectorAll(".item");
console.log("В списке", liInCategoriesRef.length, "категории");

const titleRef = [...liInCategoriesRef].map((liRef) => {
  const titleOfLiRef = `Категория : ${liRef.querySelector("h2").textContent}`;
  const listRef = `Количество элементов: ${
    liRef.querySelectorAll("li").length
  }`;
  console.log(titleOfLiRef);
  console.log(listRef);
});
