let span = document.querySelector("span");
let increment = document.querySelector(".inc");
let decrement = document.querySelector(".dec");

let count = 0;

increment.addEventListener("click", () => {
  count++;
  span.innerText = count < 10 && count >= 0 ? "0" + count : count;
});
decrement.addEventListener("click", () => {
  count--;
  span.innerText = count < 10 && count >= 0 ? "0" + count : count;
});
