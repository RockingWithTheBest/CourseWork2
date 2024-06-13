const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll("#wrapper i");
const firstCardWidth =  carousel.querySelector(".card").offsetWidth;
const carouselChildrens =  [...carousel.children];


//Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth/firstCardWidth);


//Insert copies of the last few cards to beginning of the carousel for infinite scolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
   carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

//Insert copies of the first few cards to beginning of the carousel for infinite scolling
carouselChildrens.slice(0 , cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
 })
 

let isDragging = false;
// ,startX, startScrollLEft;
const dragStart  = ()=>{
    isDragging = true;
    carousel.classList.add("dragging");
}
const dragStop = ()=>{
    isDragging = false;
    carousel.classList.remove("dragging");
}
const dragging = (e) =>{

    if(!isDragging) return; //if isDragging is false return from here
    carousel.scrollLeft = e.pageX;
    //scrollLEft sets or returns the number of pixels an elements content is scrolled horizontally
}//e.pageX returns the horizontal coordinates of mouse pointer.


//Add event listerner for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn =>{
   
    btn.addEventListener("click", ()=>{
        if (btn.id === "left") {
            carousel.scrollLeft -= firstCardWidth;
          } else {
            carousel.scrollLeft += firstCardWidth;
          }
    })
    //if click btn is left, then subtract first card width from the carousel scrollLwft else add to it.
})


const infiniteScroll = () =>{
    //if the carousel is at the beginning scoll to the end
    if(carousel.scrollLeft  ===0){
        console.log("You've reached to the left End")
        carousel.scrollLeft = carousel.scrollWidth -( 2*carousel.offsetWidth)
    }
    //if the carousel is at the end scoll to the beginning
    else if(Math.ceil(carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth)){
        //scrollWidth returns the width of the elemet's content
        //including content not visible on screen due to overflow
        //offsetWidth returns the viewable width of an element
        console.log("You've reached to the right End");
        carousel.scrollLeft = (carousel.offsetWidth)
    }
}
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);








const imgEx = document.querySelector(".ex-catalog");
imgEx.addEventListener("click", () =>{
    window.history.back(); 
});


const getValue = localStorage.getItem("Is_Language");
console.log(getValue);
const susageValue  =  document.querySelector(".suasage");
const cuisineValue = document.querySelector(".cuisine");
const pelmeniValue = document.querySelector(".pelmeni");
const fruit = document.querySelector(".fruit");
const meatValue = document.querySelector( ".beef");
const russianorn = document.querySelector(".russianorn");


var ArrayFodd= {
    "english":{
        "suasage":"Suasage",
        "cuisine":"Cuisine",
        "pelmeni":"Pelmeni",
        "fruit":"Fruit Salad",
        "meat":"Beef Meat",
        "russianorn":"Russian Corn"
    },
    "russian":{
        "suasage":"Соссиски",
        "cuisine":"Курсини",
        "pelmeni":"Пелмени",
        "fruit":"Фуктовая салат",
        "meat":"Мясо",
        "russianorn":"Кукуруза"
    }
}
if(getValue === "russian"){
    susageValue.textContent = ArrayFodd["russian"].suasage;
    cuisineValue.textContent = ArrayFodd["russian"].cuisine;
    pelmeniValue.textContent = ArrayFodd["russian"].pelmeni;
    fruit.textContent = ArrayFodd["russian"].fruit;
    meatValue.textContent = ArrayFodd["russian"].meat;
    russianorn.textContent = ArrayFodd["russian"].russianorn;

}
else if (getValue === "russian"){
    susageValue.textContent = ArrayFodd["english"].suasage;
    cuisineValue.textContent = ArrayFodd["english"].cuisine;
    pelmeniValue.textContent = ArrayFodd["english"].pelmeni;
    fruit.textContent = ArrayFodd["english"].fruit;
    meatValue.textContent = ArrayFodd["english"].meat;
    russianorn.textContent = ArrayFodd["english"].russianorn;

}

