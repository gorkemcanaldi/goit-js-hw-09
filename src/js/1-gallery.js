// images array
export const images = [
  {
    small: './img/small1.jpg',
    large: './img/large1.jpg',
    description: 'Doğa 1',
  },
  {
    small: './img/small2.jpg',
    large: './img/large2.jpg',
    description: 'Doğa 2',
  },
  {
    small: './img/small3.jpg',
    large: './img/large3.jpg',
    description: 'Doğa 3',
  },
  {
    small: './img/small4.jpg',
    large: './img/large4.jpg',
    description: 'Doğa 4',
  },
  {
    small: './img/small5.jpg',
    large: './img/large5.jpg',
    description: 'Doğa 5',
  },
  {
    small: './img/small6.jpg',
    large: './img/large6.jpg',
    description: 'Doğa 6',
  },
  {
    small: './img/small7.jpg',
    large: './img/large7.jpg',
    description: 'Doğa 7',
  },
  {
    small: './img/small8.jpg',
    large: './img/large8.jpg',
    description: 'Doğa 8',
  },
  {
    small: './img/small9.jpg',
    large: './img/large9.jpg',
    description: 'Doğa 9',
  },
];

// Galeri öğelerini oluşturma
function createGalleryItems(items) {
  return items
    .map(
      ({ small, large, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${large}" title="${description}">
          <img class="gallery-image" src="${small}" alt="${description}" />
        </a>
      </li>
    `
    )
    .join('');
}

// Galeriyi render et
const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = createGalleryItems(images);

// SimpleLightbox başlat
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title', // title attribute'ten alır açıklamayı
  captionDelay: 250, // 250 ms gecikme
});
