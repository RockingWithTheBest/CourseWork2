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

document.querySelector(".exitbtn").addEventListener('click', () => {
  window.history.back();
});


const getValue = localStorage.getItem("Is_Language")
var ArrayValues = {
  "english":{
    "black":"Black coffee",
    "regularcapo":"Regular Cappucino",
    "cappucinospeC":"Cappucino Special",
    "china":"China Tea", 
    "maffed":"Maffed Coffee",
    "exitbtn":"Exit"
  },
  "russian":{
    "black":"Черный чай",
    "regularcapo":"Обычное каппучино",
    "cappucinospeC":"Специал каппучино",
    "china":"Китайский чай", 
    "maffed":"Взбитый чай",
    "exitbtn":"Выйти"
  }
}
const value = document.querySelector(".black"); 

console.log(getValue);
if(getValue === "russian"){
  value.textContent = ArrayValues["russian"].black;
  document.querySelector(".exitbtn").textContent = ArrayValues["russian"].exitbtn;
  document.querySelector(".regularcapo").textContent = ArrayValues["russian"].regularcapo;
  document.querySelector(".cappucinospeC").textContent = ArrayValues["russian"].cappucinospeC;
  document.querySelector(".china").textContent = ArrayValues["russian"].china;
  document.querySelector(".maffed").textContent = ArrayValues["russian"].maffed;
}
else if (getValue ==="english"){
  document.querySelector(".exitbtn").textContent = ArrayValues["english"].exitbtn;
  document.querySelector(".black").textContent = ArrayValues["english"].black;
  document.querySelector(".regularcapo").textContent = ArrayValues["english"].regularcapo;
  document.querySelector(".cappucinospeC").textContent = ArrayValues["english"].cappucinospeC;
  document.querySelector(".china").textContent = ArrayValues["english"].china;
  document.querySelector(".maffed").textContent = ArrayValues["english"].maffed;
}
