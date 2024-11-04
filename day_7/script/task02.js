const whiteBox = document.querySelector("footer > div");

whiteBox.addEventListener("click", () => {
  let name = prompt("What’s your name ?");
  while (name === null || name === "") {
    name = prompt("What’s your name ?");
  }

  window.confirm("Are you sure that " + name + " is your name ?");
  alert("Hello " + name + " !");
});
