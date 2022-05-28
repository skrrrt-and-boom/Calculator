const button1 = document.getElementsByClassName("button-1");
const button = document.getElementsByClassName("button");
const c = document.getElementById("C");
const footer = document.querySelector("footer");

//  Color after

for (let i = 0; i < button1.length; i++) {
  button1[i].addEventListener("click", () => {
    button1[i].style.backgroundColor = "rgba(152, 8, 139, 0.3)";
  });
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    button[i].style.backgroundColor = "rgba(85,118,209,0.3)";
  });
}

c.addEventListener("click", () => {
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "rgba(85,118,209,0)"; }
  for (let i = 0; i < button1.length; i++) {
    button1[i].style.backgroundColor = "rgba(152, 8, 139, 0)"; }
});






footer.addEventListener("click", () => {
  footer.textContent = "@_@";
});
