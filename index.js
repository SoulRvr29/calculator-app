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

function calculate(button) {
  console.log(result.innerHTML);
  switch (button) {
    case "=":
      result.innerHTML = eval(result.innerHTML);
      break;
    case "RESET":
      result.innerHTML = "0";
      break;
    case "DEL":
      result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1);
      if (result.innerHTML == "") result.innerHTML = "0";
      break;
    case "x":
      result.innerHTML += "*";
      break;
    case ".":
      result.innerHTML += button;
      break;
    default:
      if (result.innerHTML == "0") result.innerHTML = "";
      // if (result.innerHTML.length < 9)
      result.innerHTML += button;
  }
}

function resultWrite(calcValue) {
  result.innerHTML = calcValue;
}
