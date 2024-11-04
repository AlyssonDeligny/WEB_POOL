const whiteBox = document.querySelector("footer > div");
let counter = 0;

whiteBox.addEventListener("click", () => {
  counter += 1;
  whiteBox.textContent = counter;
});
