export const getData = async () => {
    const res = await fetch('js/projects.json');
    const data = await res.json();

    const parentElement = document.querySelector('.slider');
    const cssParentElement = document.querySelector('.css')
    const figmaParentElement = document.querySelector('.figma')

    showData(data[0], parentElement) // html css js
    showData(data[1], cssParentElement) // css
    showData(data[2], figmaParentElement) // figma
    showModal()
}

function showData(json, parentElem) {
    json.reverse();
    json.map(e => {
        let htmlFigma = `<img src="${e.img}"data-hd="${e.imghd}" alt="${e.title}" data-id="${e.id}"class="slider__img figma__img">
                <div class="slider__description">
                    <p class="slider__description-title">${e.title}</p>
                    <aside class="slider__technology">
                        ${e.technology.join('')}
                    </aside>
                </div>
`
        let html = `<a href="${e.link}" target="_blank" class="slider__link">
                <img src="${e.img}"data-hd="${e.hd}" alt="${e.title}" data-id="${e.id}"class="slider__img">
                <div class="slider__description">
                    <p class="slider__description-title">${e.title}</p>
                    <aside class="slider__technology">
                        ${e.technology.join('')}
                    </aside>
                </div>
<           /a>`

        const elemento = document.createElement('article');
        elemento.classList.add('slider__item')
        elemento.innerHTML = `${e.link != undefined ? html : htmlFigma}`;
        return parentElem.appendChild(elemento)
    })

}
const showModal = () => {
    const figmaImages = document.querySelectorAll('.figma__img');
    const modal = document.querySelector('.modal-images');
    const modalImg = document.querySelector('.modal__img');
    const modalArrowRight = document.querySelector('.fa-chevron-right');
    const modalArrowLeft = document.querySelector('.fa-chevron-left');
    figmaImages.forEach(e => {
        e.addEventListener('click', () => {
            modal.classList.add('modal-active');
            let img = e.getAttribute('data-hd');
            let id = e.getAttribute('data-id');
            modalImg.classList.add('show-modal-img')
            modalImg.setAttribute('src', img);
            modalImg.setAttribute('data-id', id)
            modalImg.addEventListener('click', () => {
                modal.classList.remove('modal-active')
                modalImg.classList.remove('show-modal-img')
            });
        })
    })
    modalArrowRight.addEventListener('click', (e) => nextImage(e, modalImg, figmaImages, modal))
    modalArrowLeft.addEventListener('click', (e) => prevImage(e, modalImg, figmaImages, modal))

}
function nextImage(i, element, images, modal) {
    element.classList.remove('show-modal-img');
    let parent = i.target.parentElement.firstElementChild;
    let id = parent.getAttribute('data-id');
    element.className = 'modal__img';
    setTimeout(() => {
        images.forEach(e => {
            if (e.getAttribute('data-id') == id) {
                try {
                    let nextImage = e.parentElement.nextElementSibling.firstElementChild.getAttribute('data-hd');
                    let id = e.parentElement.nextElementSibling.firstElementChild.getAttribute('data-id');
                    element.classList.add('show-modal-img')
                    element.setAttribute('src', nextImage);
                    element.setAttribute('data-id', id);
                } catch (error) {
                    modal.classList.remove('modal-active')
                }
            }
        })
    }, 50)
}
function prevImage(i, element, images, modal) {
    element.classList.remove('show-modal-img');
    let parent = i.target.parentElement.firstElementChild;
    let id = parent.getAttribute('data-id');
    element.className = 'modal__img';
    setTimeout(() => {
        images.forEach(e => {
            try {
                if (e.getAttribute('data-id') == id) {
                    let prevImage = e.parentElement.previousElementSibling.firstElementChild.getAttribute('data-hd');
                    let prevId = e.parentElement.previousElementSibling.firstElementChild.getAttribute('data-id');
                    element.classList.add('show-modal-img')
                    element.setAttribute('src', prevImage)
                    element.setAttribute('data-id', prevId)
                }
            } catch (error) {
                modal.classList.remove('modal-active')
            }
        })
    }, 50)
}





