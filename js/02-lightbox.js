import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galContainer = document.querySelector(".gallery");
const imGcards = addImgGallery(galleryItems);

galContainer.insertAdjacentHTML("beforeend", imGcards);
galContainer.addEventListener("click", onGalContainer);

function addImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>`;
    })
    .join("");
}

function onGalContainer(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  let gallery = new SimpleLightbox(".gallery a");

  gallery.on("show.simplelightbox", function () {
    gallery.defaultOptions.captionDelay = 250;
  });
}
