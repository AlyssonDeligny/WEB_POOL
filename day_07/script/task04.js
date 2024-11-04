const btns = document.querySelectorAll("button");
const btnmore = btns[0];
const btnless = btns[1];
const paragraphes = document.querySelectorAll("p");
const menu = document.querySelector("select");

btnmore.addEventListener("click", () => {
  paragraphes.forEach((paragraphe) => (paragraphe.style.fontSize = "larger"));
});
btnless.addEventListener("click", () => {
  paragraphes.forEach((paragraphe) => (paragraphe.style.fontSize = "smaller"));
});

menu.addEventListener("change", () => {
  document.body.style.backgroundColor = menu.value;
});
