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

document.querySelector(".exit-btn").addEventListener('click', () => {
  window.history.back();
});


var ArrayTake = {
  "english":{
    "fries":"Fries with a Burger",
    "burger":"Portuguese Burger",
    "sushi":"Sushi"
  },
  "russian":{
    "fries":"Картофель с Бургером",
    "burger":"Португальский бургер",
    "sushi":"Суши"
  }
}
const getValue = localStorage.getItem("Is_Language");
if(getValue === "russian"){
  document.querySelector(".fries").textContent= ArrayTake["russian"].fries;
  document.querySelector(".burger").textContent= ArrayTake["russian"].burger;
  document.querySelector(".sushi").textContent= ArrayTake["russian"].sushi;
}
else if(getValue === "english"){
  document.querySelector(".fries").textContent= ArrayTake["english"].fries;
  document.querySelector(".burger").textContent= ArrayTake["english"].burger;
  document.querySelector(".sushi").textContent= ArrayTake["english"].sushi;
}