@import url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

:root {
--bg: #11171a;
--bg-nav: #1c2429;
--text-color: #f6f4f4;
--primary: #1ceeba;
--bg-cards: #1c2429;
}

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

\*::selection {
background-color: #0c1012;
color: #ffffff;
}

body {
background: var(--bg);
overflow-x: hidden;
}

body::-webkit-scrollbar {
background-color: var(--bg);
}

body::-webkit-scrollbar-thumb {
background-color: var(--bg-nav);
}

a {
text-decoration: none;
}

.header {
width: 100%;
text-align: center;
padding: 30px 0;
color: var(--title);
font-family: "Yeseva One", cursive;
color: var(--text-color);
font-size: 1.5rem;
padding-left: 90px;
}

.navigation {
width: 90px;
height: 100vh;
background-color: var(--bg-nav);
padding: 60px 0;
position: fixed;
bottom: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
z-index: 200;
}

.navigation\_\_logo {
color: var(--text-color);
text-align: center;
text-decoration: none;
font-size: 1.7rem;
font-family: "Yeseva One", cursive;
font-weight: 700;
}

.navigation\_\_ul {
display: flex;
flex-direction: column;
gap: 20px;
}

.navigation\_\_li {
display: flex;
align-items: center;
justify-content: center;
}

.navigation**a,
.navigation**figma-projects {
font-size: 1.7rem;
color: var(--text-color);
text-align: center;
transition: 0.2s;
cursor: pointer;
}
.navigation\_\_a-active {
color: var(--primary);
}

.navigation\_\_a:hover {
transform: scale(1.2);
color: var(--primary);
}

.main {
padding-left: 90px;
position: relative;
}
/_ svg _/
.main-svg {
position: fixed;
width: 100px;
height: 100px;
border-radius: 50%;
z-index: 10;
pointer-events: none;
user-select: none;
}
.main-svg-1 {
top: 0;
left: 90px;
transform: scale(10);
}
.main-svg-2 {
bottom: 0;
right: 0;
transform: scale(10);
}
/_ navigation technology _/
.navigation-technology {
width: 60px;
height: 300px;
background-color: #1c242996;
backdrop-filter: blur(10px);
position: fixed;
right: 30px;
top: 50%;
transform: translateY(-50%);
border-radius: 10px;
z-index: 2000;
}
.navigation-technology**ul {
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
}
.navigation-technology**li {
width: 100%;
/_ calc height / li items _/
height: calc(300px / 5);
display: flex;
align-items: center;
justify-content: center;
}
.navigation-technology**icon {
width: 60%;
position: relative;
z-index: 300;
color: var(--text-color);
cursor: pointer;
transition: 0.2s;
}
.navigation-technology**icon:active {
transform: scale(0.8);
}
/_ ball _/
.ball {
width: 100%;
height: 50px;
background-color: var(--primary);
position: absolute;
top: 0;
left: 0;
z-index: 100;
border-radius: 10px;
border-radius: 10px;
/_ transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
_/
transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
/_ svg _/

/_ projects Container_/
.projects-container {
padding: 0 20px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(390px, 390px));
grid-column-gap: 20px;
grid-row-gap: 20px;
position: relative;
z-index: 1900;
}
.projects**item {
display: block;
width: 100%;
height: 250px;
background-color: var(--bg-cards);
border-radius: 5px;
background-color: var(--bg-nav);
background-color: var(--bg-cards);
overflow: hidden;
}
.projects**container-img {
display: block;
width: 100%;
height: 85%;
}
.projects**img {
display: block;
width: 100%;
height: 100%;
object-fit: cover;
object-position: top;
}
.projects**description {
width: 100%;
height: 15%;
background-color: var(--bg-cards);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;
}
.projects**description-title {
color: var(--text-color);
font-size: 1rem;
font-family: "Poppins", cursive;
}
.projects**technology {
height: 100%;
display: flex;
align-items: center;
justify-content: center;
}
.technology\_\_icons {
width: 20px;
}
.opacity {
opacity: 0.2;
}
.small {
opacity: 0.3;
}

.footer {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 30px 0;
padding-left: 90px;
border-top: 2px solid var(--bg-nav);
display: none;
}

.footer\_\_copyright {
color: var(--primary);
font-size: 1.5rem;
font-family: "Poppins", sans-serif;
}

.footer\_\_link {
color: #808080;
font-family: "Poppins", sans-serif;
}

.footer a {
color: var(--text-color);
font-size: 1.2rem;
}

.footer a:hover {
text-decoration: underline;
}

@media (max-width: 800px) {
.header {
font-size: 1rem;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
position: relative;
z-index: 200;
}
.navigation {
width: 100%;
height: 70px;
z-index: 1000;
flex-direction: row;
align-items: center;
padding: 0 20px;
background-color: #0c1012a8;
background-color: #1c242996;

    backdrop-filter: blur(10px);

}

.navigation**ul {
flex-direction: row;
gap: 10px;
}
.navigation**a,
.navigation\_\_figma-projects {
font-size: 1.4rem;
}
.main {
padding: 0px 10px 70px 10px;
}
.main-svg {
transform: scale(4) translate(-10px, 5px);
}
.slider-container {
width: 100%;
padding: 0px;
height: 200px;
}

.slider {
width: 100%;
overflow-x: scroll;
scroll-snap-type: x mandatory;
gap: 10px;
border-radius: 3px;
}

.slider**item {
width: 95%;
height: 100%;
scroll-snap-align: center;
border-radius: 3px;
}
.slider**img {
height: 100%;
}
.slider**description {
height: 40px;
}
.slider**description-title {
font-size: 0.8rem;
}
.slider-container .right,
.left {
display: none;
}
.footer {
padding: 10px;
}
.footer**copyright {
font-size: 1.1rem;
}
.footer**link {
font-size: 0.9rem;
}
}

import getData from "./showData.js";

//variables navigation technology
const ball = document.querySelector(".ball");
const icons = document.querySelectorAll(".navigation-technology**icon");
const heightLi = document.querySelector(
".navigation-technology**li"
).clientHeight;

function translateBall() {
ball.style.height = `${heightLi}px`;
icons.forEach((icon) => {
icon.addEventListener("click", () => {
let dataValue = Number(icon.getAttribute("data-value"));
console.log(dataValue);
switch (dataValue) {
case 0:
ball.style.transform = `translateY(0%)`;
break;
case 1:
ball.style.transform = `translateY(100%)`;
break;
case 2:
ball.style.transform = `translateY(200%)`;
break;
case 3:
ball.style.transform = `translateY(300%)`;
break;
case 4:
ball.style.transform = `translateY(400%)`;
break;

        default:
          break;
      }
    });

});
}

getData();

translateBall();
