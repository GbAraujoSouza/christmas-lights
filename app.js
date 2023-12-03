// html elements
const lightsElements = document.querySelectorAll(".light");
const startBtn = document.querySelector(".start__btn");

// helper functions
const mod = (n, m) => ((n % m) + m) % m;
const changeBtn = (state) => startBtn.textContent = state ? "stop" : "start";

// global variables 
let i = 0;
let displayOn = false;
let timerLogic;

const toggleDisplay = () => {

  displayOn = !displayOn;
  changeBtn(displayOn);

  if (displayOn) {
      timerLogic = setInterval(() => {
      lightsElements[i].classList.toggle('on');

      // turn off previous light
      const previoursLigth = mod(i - 1, lightsElements.length);
      lightsElements[previoursLigth].classList.remove('on');

      i = (i + 1) % lightsElements.length;
    }, 500);
  } else {
    i = 0;
    lightsElements.forEach((light) => light.classList.remove("on"));
    clearInterval(timerLogic);
  }

}

startBtn.addEventListener("click", toggleDisplay)