import { getData } from "./showData.js";

const arrowRight = document.querySelectorAll('.right');
const arrowLeft = document.querySelectorAll('.left');

getData()
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


