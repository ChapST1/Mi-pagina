export default async function getData() {
  //containers
  const reactContainer = document.querySelector(".react");
  const javascriptContainer = document.querySelector(".javascript");
  const cssContainer = document.querySelector(".css");
  const tailwindContainer = document.querySelector(".tailwind");
  const sassContainer = document.querySelector(".sass");

  const response = await fetch("../../../services/projects.json");
  const data = await response.json();

  const [react, javascript, css, tailwind, sass] = data;

  const obj = changeOrderArray(react, javascript, css, tailwind, sass);

  //show data function
  showData(reactContainer, obj.react);

  const allFunctions = {
    0: () => {
      showData(reactContainer, obj.react);
    },
    1: () => {
      showData(javascriptContainer, obj.javascript);
    },
    2: () => {
      showData(cssContainer, obj.css);
    },
    3: () => {
      showData(tailwindContainer, obj.tailwind);
    },
    4: () => {
      showData(sassContainer, obj.sass);
    },
  };
  handleIconClick(allFunctions);
  handleLoaderImages();
}
function showData(container, arrProjects) {
  container.classList.add("projects-containerActive");
  const fragment = document.createDocumentFragment();
  arrProjects.map((e) => {
    let a = document.createElement("a");
    a.setAttribute("href", e.link);
    a.setAttribute("target", "_blank");
    a.classList.add("projects__item");

    a.innerHTML = `
    <span class="loader"></span>
                           <picture class="projects__container-img">
                           <img src="${e.img}"data-hd="${e.hd}" alt="${
      e.title
    }" data-id="${e.id}"class="projects__img">
                           </picture>
                    <div class="projects__description">
                        <p class="projects__description-title">${e.title}</p>
                        <aside class="projects__technology">
                            ${e.technology.join("")}
                        </aside>
                    </div>`;

    fragment.appendChild(a);
  });
  container.appendChild(fragment);
}

//icons click
function handleIconClick(obj) {
  const icons = document.querySelectorAll(".navigation-technology__icon");
  icons.forEach((e, i) => {
    e.addEventListener("click", () => {
      clearContainers();
      document.documentElement.scrollTop = 0;
      obj[i]();
      handleLoaderImages();
    });
  });
}

function clearContainers() {
  const containers = document.querySelectorAll(".projects-container");
  containers.forEach((e) => {
    e.classList.remove("projects-containerActive");
    e.innerHTML = "";
  });
}

function handleLoaderImages() {
  const images = document.querySelectorAll(".projects__img");
  images.forEach((e) => {
    e.addEventListener("load", () => {
      let granFather = e.parentElement.parentElement; // a.projects__item
      let father = e.parentElement; //picture.projects__container-img
      let brother = father.nextElementSibling; //div.projects__description
      let loader = granFather.firstElementChild; //span.loader

      loader.style.display = "none";
      granFather.style.pointerEvents = "all";
      granFather.style.display = "block";
      father.style.display = "block";
      brother.style.display = "flex";
    });
  });
}

function changeOrderArray(...args) {
  return {
    react: args[0].reverse(),
    javascript: args[1].reverse(),
    css: args[2].reverse(),
    tailwind: args[3].reverse(),
    sass: args[4].reverse(),
  };
}
