import getData from "./showData.js";

//variables navigation technology
const ball = document.querySelector(".ball");
const icons = document.querySelectorAll(".navigation-technology__icon");
const widthLi = document.querySelector(
  ".navigation-technology__li"
).clientWidth;

function translateBall() {
  ball.style.width = `${widthLi}px`;
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let dataValue = Number(icon.getAttribute("data-value"));
      switch (dataValue) {
        case 0:
          ball.style.transform = `translateX(0%) scale(0.8)`;
          break;
        case 1:
          ball.style.transform = `translateX(100%) scale(0.8)`;
          break;
        case 2:
          ball.style.transform = `translateX(200%) scale(0.8)`;
          break;
        case 3:
          ball.style.transform = `translateX(300%) scale(0.8)`;
          break;
        case 4:
          ball.style.transform = `translateX(400%) scale(0.8)`;
          break;

        default:
          break;
      }
    });
  });
}

getData();

translateBall();
