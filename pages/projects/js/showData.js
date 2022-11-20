export const getData = async () => {
  const res = await fetch("js/projects.json");
  const data = await res.json();

  const parentElement = document.querySelector(".slider");
  const cssParentElement = document.querySelector(".css");

  showData(data[0], parentElement); // html css js
  showData(data[1], cssParentElement); // css
};

function showData(json, parentElem) {
  json.reverse();
  json.map((e) => {
    let html = `
    <a href="${e.link}" target="_blank" class="slider__link">
              <div class="loader">
                <span class="loader__ball"></span>
                <span class="loader__ball"></span>
                <span class="loader__ball"></span>
              </div>
                <img src="${e.img}"data-hd="${e.hd}" alt="${e.title}" data-id="${e.id}"class="slider__img">
                <div class="slider__description">
                    <p class="slider__description-title">${e.title}</p>
                    <aside class="slider__technology">
                        ${e.technology.join("")}
                    </aside>
                </div>
     </a>`;

    const elemento = document.createElement("article");
    elemento.classList.add("slider__item");
    elemento.innerHTML = html;

    return parentElem.appendChild(elemento);
  });

  const images = document.querySelectorAll('.slider__img');
  images.forEach(e =>{
    e.addEventListener('load',() =>{
      e.previousElementSibling.style.display = 'none'
      e.style.display = 'block'
      
    })
  })
}
