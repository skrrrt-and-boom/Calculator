const button1 = document.getElementsByClassName("button-1");
const button = document.getElementsByClassName("button");
const c = document.getElementById("C");
const footer = document.querySelector("footer");
const scroon = document.querySelector(".screen");
const mega = document.getElementsByClassName("mega");

let megaCounter = [];
//  Color after & logic
function fuckLogic() {
  for (let i = 0; i < button1.length; i++) {
    button1[i].addEventListener("click", function display() {
      button1[i].style.backgroundColor = "rgba(152, 8, 139, 0.3)";
      if (i !== 2 & i !== 3) {
      let clone = button1[i].firstChild.cloneNode(true);
      scroon.appendChild(clone);
      }
      button1[i].removeEventListener("click", display);
    });
  }
}
fuckLogic();

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    button[i].style.backgroundColor = "rgba(85,118,209,0.3)";
    let clone = button[i].firstChild.cloneNode(true);
    scroon.appendChild(clone);
  });
}

//remove colors & digit
c.addEventListener("dblclick", () => {
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "rgba(85,118,209,0)"; }
  for (let i = 0; i < button1.length; i++) {
    button1[i].style.backgroundColor = "rgba(152, 8, 139, 0)"; }
    while (scroon.lastChild) {
      scroon.removeChild(scroon.lastChild);
    }
    fuckLogic();
});

//  remove number & last color
for (let i = 0; i < mega.length; i++) {
  mega[i].addEventListener("click", () => {
    if (i !== 2) {
      megaCounter.push(i);
    }
  });
}

c.addEventListener("click", () => {
  if (scroon.lastChild) {
    scroon.removeChild(scroon.lastChild);
  }
  mega[megaCounter.pop()].style.backgroundColor = "rgba(85,118,209,0)";
});

footer.addEventListener("click", () => {
  footer.textContent = "@_@";
});
