const action = document.querySelectorAll("div#counter button");
const decrementRef = action[0];

const incrementRef = action[1];
const counterValue = document.querySelector("div#counter span");
decrementRef.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
  return counterValue;
});
incrementRef.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
  return counterValue;
});
