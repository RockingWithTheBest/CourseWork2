const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const lastButton = document.querySelector('.carousel-last');
const firstButton = document.querySelector('.carousel-first');

let currentIndex = 0;

function showItem(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

// Display the first item by default
showItem(currentIndex);

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
});

lastButton.addEventListener('click', () => {
  currentIndex = carouselItems.length - 1;
  showItem(currentIndex);
});

firstButton .addEventListener('click', () => {
    currentIndex = 0;
    showItem(currentIndex);
});