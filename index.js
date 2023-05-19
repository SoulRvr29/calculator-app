let themeActual = localStorage.getItem("theme");
let switchPosition = document.querySelector(".switch");
let result = document.querySelector(".result");

setTheme(themeActual);

function setTheme(themeValue) {
  switch (themeValue) {
    case "1":
      document.documentElement.className = "theme1";
      break;
    case "2":
      document.documentElement.className = "theme2";
      break;
    case "3":
      document.documentElement.className = "theme3";
  }
  switchPosition.value = themeValue;
  localStorage.setItem("theme", themeValue);
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.borderBottomWidth = "0";
    button.style.marginTop = "0.25rem";
    calculate(button.innerHTML);
  });
  button.addEventListener("mouseup", () => {
    button.style.borderBottomWidth = "0.25rem";
    button.style.marginTop = "0";
  });
  button.addEventListener("mouseleave", () => {
    button.style.borderBottomWidth = "0.25rem";
    button.style.marginTop = "0";
  });
});

let number = ""; // container for calculations

function calculate(button) {
  switch (button) {
    case "=":
      number = eval(number);
      number = "" + number; // convert to string
      result.innerHTML = number;
      result.innerHTML = result.innerHTML.slice(0, 12); // result max length
      break;

    case "RESET":
      number = "";
      result.innerHTML = "0";
      break;

    case "DEL":
      let max = number.length - 1;
      number = number.slice(0, max);
      result.innerHTML = result.innerHTML.slice(0, max);
      if (result.innerHTML == "") result.innerHTML = "0";
      break;

    case "x":
    case "/":
    case "+":
    case "-":
      let operator = operatorCheck(); //replace operator if last
      if (operator == true) {
        number = number.slice(0, number.length - 1);
      }
      if (button == "x") number += "*";
      else number += button;
      break;

    case ".":
      let dotLock = dotCheck(); //prevent from more than one dot
      if (dotLock == false) {
        number += button;
        result.innerHTML += button;
      }
      break;

    default: //numbers 0 - 9
      let afterOperator = operatorCheck(); //clear screen for second number
      if (afterOperator == true || result.innerHTML == "0")
        result.innerHTML = "";
      number += button;
      result.innerHTML += button;
      result.innerHTML = result.innerHTML.slice(0, 12); // result max length
  }
}

function dotCheck() {
  let dotCounter = 0;
  for (let i = 0; i < result.innerHTML.length; i++) {
    if (result.innerHTML.charAt(i) == ".") dotCounter++;
  }
  if (dotCounter == 1) return true;
  else return false;
}

function operatorCheck() {
  if (
    number.charAt(number.length - 1) == "*" ||
    number.charAt(number.length - 1) == "/" ||
    number.charAt(number.length - 1) == "+" ||
    number.charAt(number.length - 1) == "-"
  )
    return true;
  else return false;
}
