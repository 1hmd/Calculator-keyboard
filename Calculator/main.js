var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");
var btnLastValue = null;

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText; //! Get the value of the clicked numbers
    if (btnLastValue != btntext) {
      //! To check there is no spam
      if (btntext == "×") {
        btnLastValue = btntext;
        //! change the x value to *
        btntext = "*";
      }
      if (btntext == "÷") {
        btnLastValue = btntext;
        //! change the ÷ value to /
        btntext = "/";
      }
      screen.value += btntext; //! print the value in the screen
    }
  });
}
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "*":
      if (btnLastValue != event.key) {
        btnLastValue = event.key;
        screen.value += event.key;
      }
      break;
    case "/":
      if (btnLastValue != event.key) {
        btnLastValue = btntext;
        screen.value += event.key;
      }
      break;
    case "Backspace":
      screen.value = screen.value.substr(0, screen.value.length - 1);
      btnLastValue = null;
      break;
    case "Enter":
      screen.value = eval(screen.value);
      break;
    case "-":
    case "+":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
    case "%":
    case "(":
    case ")":
      screen.value += event.key;
      break;
    default:
      return;
  }
  event.preventDefault();
});

//! Some functions
answer = () => ((screen.value = eval(screen.value)), (btnLastValue = null));
sin = () => (screen.value = Math.sin(screen.value));
cos = () => (screen.value = Math.cos(screen.value));
tan = () => (screen.value = Math.tan(screen.value));
pow = () => (screen.value = Math.pow(screen.value, 2));
sqrt = () => (screen.value = Math.sqrt(screen.value, 2));
log = () => (screen.value = Math.log(screen.value));
pi = () => (screen.value = 3.14159265359);
e = () => (screen.value = 2.71828182846);
clearValue = () => (screen.value = "");
(backspc = () =>
  (screen.value = screen.value.substr(0, screen.value.length - 1))),
  (btnLastValue = null);
function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  screen.value = f;
}
