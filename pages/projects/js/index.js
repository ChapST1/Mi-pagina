import { getData } from "./showData.js";

const arrowRight = document.querySelectorAll('.right');
const arrowLeft = document.querySelectorAll('.left');

const moon = document.getElementById('moon');
getData()

moon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.className == 'dark-mode') {
        moon.className = "fa-solid fa-sun";
        localStorage.setItem('DarkMode', 'on')
    } else {
        moon.className = "fa-solid fa-moon";
        localStorage.setItem('DarkMode', 'off')
    }
})
if (localStorage.getItem('DarkMode') == 'on') {
    document.body.classList.toggle('dark-mode');
    moon.className = 'fa-solid fa-sun'
} else {
    document.body.classList.remove('dark-mode');
    moon.className = 'fa-solid fa-moon'
}
arrowRight.forEach(e => {
    e.addEventListener('click', () => {
        e.style.pointerEvents = 'none';
        let slider = e.parentElement.firstElementChild;
        let item = slider.firstElementChild.clientWidth; //width 
        slider.scrollLeft += item;
        setTimeout(() => {
            e.style.pointerEvents = 'auto';
        }, 200);
        if (!(slider.scrollLeft + item).toString().includes('00')) {
            slider.scrollLeft = 0
        } else {
            console.log('no');
        }

    })
})

arrowLeft.forEach(e => {
    e.addEventListener('click', () => {
        e.style.pointerEvents = 'none';
        let slider = e.parentElement.firstElementChild;
        let item = slider.firstElementChild.clientWidth; //width 
        let child = e.parentElement.firstElementChild.childElementCount;
        let op = item * child;
        slider.scrollLeft -= item;
        setTimeout(() => {
            e.style.pointerEvents = 'auto';
        }, 200);
        if ((slider.scrollLeft - item) == -item) {
            slider.scrollLeft = op;
        }
    })
})


