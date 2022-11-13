export const getData = async () => {
    const res = await fetch('js/projects.json');
    const data = await res.json();

    const parentElement = document.querySelector('.slider');
    const cssParentElement = document.querySelector('.css')

    showData(data[0], parentElement) // html css js
    showData(data[1], cssParentElement) // css
    showModal()
}

function showData(json, parentElem) {
    json.reverse();
    json.map(e => {

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
        elemento.innerHTML = html;
        return parentElem.appendChild(elemento)
    })

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





