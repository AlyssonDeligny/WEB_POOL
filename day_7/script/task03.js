const whiteBox = document.querySelector("footer > div");

let letters = "";
let last42 = "";

document.addEventListener("keypress", (e) => {
  letters += e.key;
  last42 = letters.slice(-42);
  whiteBox.textContent = last42;
});
