import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMarkupEl = document.querySelector("ul.gallery");
const addMarkupItemsEl = addMarkupItems(galleryItems);
galleryMarkupEl.insertAdjacentHTML("beforeend", addMarkupItemsEl);

function addMarkupItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
         <div class = "gallery__item">
         <a class = "gallery__link" href = "${original}">
         <img class = "gallery__image" src="${preview}" data-source="${original}" alt="${description}">
         </a>
         </div>
        `;
    })
    .join("");
}
const openImgInModal = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const getOriginalUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<div class="modal"> <img src = "${getOriginalUrl}"></div>`
  );
  instance.show();

  const visible = basicLightbox.visible(
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    })
  );
};

galleryMarkupEl.addEventListener("click", openImgInModal);
