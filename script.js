const button1 = document.getElementsByClassName("button-1");
const button = document.getElementsByClassName("button");
const c = document.getElementById("C");
const footer = document.querySelector("footer");
const scroon = document.querySelector(".screen");
const mega = document.getElementsByClassName("mega");
const equals = document.getElementById("=");
const body = document.querySelector("body");
const cal = document.querySelector(".calculator");

let para = scroon.childNodes;
let megaCounter = [];
//  Color after & logic
function fuckLogic() {
  for (let i = 0; i < button1.length; i++) {
    button1[i].addEventListener("click", () => {
      button1[i].style.backgroundColor = "rgba(152, 8, 139, 0.3)";
      if (i !== 2 & i !== 3) {
      let clone = button1[i].firstChild.cloneNode(true);
      scroon.appendChild(clone);
      }
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

//  loops
function loop1(i) {
  let num1 = "";
  for (let j = 0; j < i; j++) {
    num1 += para[j].textContent;
  }
  return num1;
}

function loop2(i) {
  let num2 = "";
  for (let k = i + 1; k < para.length; k++) {
    num2 += para[k].textContent;
  }
  return num2;
}

//  do the math
function count() {
  for (let i = 0; i < para.length; i++) {
    if (para[i].textContent === "-") {
      let aaa = loop1(i);
      let bbb = loop2(i);
      return Number(aaa) - Number(bbb);
    }
    else if (para[i].textContent === "+") {
      let aaa = loop1(i);
      let bbb = loop2(i);
      return Number(aaa) + Number(bbb);
    }
    else if (para[i].textContent === "*") {
      let aaa = loop1(i);
      let bbb = loop2(i);
      return Number(aaa) * Number(bbb);
    }
    else if (para[i].textContent === "÷") {
      let aaa = loop1(i);
      let bbb = loop2(i);
      return Number(aaa) / Number(bbb);
    }
  }
}

equals.addEventListener("click", () => {
  let opa = document.createElement("p");
  opa.textContent = count();
  while (scroon.lastChild) {
    scroon.removeChild(scroon.lastChild);
  }
  scroon.appendChild(opa);
  if (para[0].textContent === "Infinity" || para[0].textContent === "-Infinity") {
    cal.style.webkitFilter = "blur(7px)";
    let warBac = document.createElement("div");
    warBac.style.position = "absolute";
    warBac.style.width = "100%";
    warBac.style.height = "100vh";
    warBac.style.backgroundColor = "rgba(0,0,0,0.7)";
    let warning = document.createElement("h1");
    warning.textContent = "You broke Math, from this path there is no turning back";
    warning.style.position = "absolute";
    warning.style.color = "red";
    warning.style.textAlign = "center";
    body.appendChild(warBac);
    body.appendChild(warning);
  }
});


footer.addEventListener("click", () => {
  footer.textContent = "@_@";
});
