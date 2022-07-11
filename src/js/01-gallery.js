// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);
const mainGalleryEl = document.querySelector('.gallery');
const imagesCardEl = createImagesCards(galleryItems);

mainGalleryEl.insertAdjacentHTML('beforeend', imagesCardEl);
mainGalleryEl.addEventListener('click', onMainGalleryElClick);

function createImagesCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
      `;
    })
    .join('');
}

let instance;

function onMainGalleryElClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show(window.addEventListener('keydown', onEscBtnPush));
}

const closeModalWindow = event => {
  instance.close();
  window.removeEventListener('keydown', onEscBtnPush);
};

const onEscBtnPush = event => {
  if (event.code !== 'Escape') {
    return;
  }

  closeModalWindow();
};
