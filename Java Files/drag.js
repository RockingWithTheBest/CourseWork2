const carousel1 = document.querySelector(".carousel");
const arrowBtns2 = document.querySelectorAll("#wrapper2 i");
const firstCardWidth1 =  carousel1.querySelector(".card").offsetWidth;
const carouselChildrens1 =  [...carousel1.children];


//Get the number of cards that can fit in the carousel at once
let cardPerView1 = Math.round(carousel1.offsetWidth/firstCardWidth);


//Insert copies of the last few cards to beginning of the carousel for infinite scolling
carouselChildrens1.slice(-cardPerView).reverse().forEach(card =>{
   carousel1.insertAdjacentHTML("afterbegin", card.outerHTML);
})

//Insert copies of the first few cards to beginning of the carousel for infinite scolling
carouselChildrens1.slice(0 , cardPerView).reverse().forEach(card =>{
    carousel1.insertAdjacentHTML("beforeend", card.outerHTML);
 })
 

let isDragging1 = false;
// ,startX, startScrollLEft;
const dragStart1  = ()=>{
    isDragging1 = true;
    carousel1.classList.add("dragging");
}
const dragStop1 = ()=>{
    isDragging1 = false;
    carousel1.classList.remove("dragging");
}
const dragging1 = (e) =>{

    if(!isDragging1) return; //if isDragging is false return from here
    carousel1.scrollLeft = e.pageX;
    //scrollLEft sets or returns the number of pixels an elements content is scrolled horizontally
}//e.pageX returns the horizontal coordinates of mouse pointer.


//Add event listerner for the arrow buttons to scroll the carousel left and right
arrowBtns2.forEach(btn =>{
   
    btn.addEventListener("click", ()=>{
        if (btn.id === "left") {
            carousel1.scrollLeft -= firstCardWidth1;
          } else {
            carousel1.scrollLeft += firstCardWidth1;
          }
    })
    //if click btn is left, then subtract first card width from the carousel scrollLwft else add to it.
})


const infiniteScroll1 = () =>{
    //if the carousel is at the beginning scoll to the end
    if(carousel1.scrollLeft  ===0){
        console.log("You've reached to the left End")
        carousel1.scrollLeft = carousel1.scrollWidth -( 2*carousel1.offsetWidth)
    }
    //if the carousel is at the end scoll to the beginning
    else if(Math.ceil(carousel1.scrollLeft === carousel1.scrollWidth - carousel1.offsetWidth)){
        //scrollWidth returns the width of the elemet's content
        //including content not visible on screen due to overflow
        //offsetWidth returns the viewable width of an element
        console.log("You've reached to the right End");
        carousel1.scrollLeft = (carousel1.offsetWidth)
    }
}
carousel1.addEventListener("mousemove", dragging);
carousel1.addEventListener("mousedown", dragStart);
carousel1.addEventListener("mouseup", dragStop);
carousel1.addEventListener("scroll", infiniteScroll);






const btn1 = document.getElementById("btn1");
const displayUrl = document.querySelector("#wrapper");
const exitUrl = document.querySelector("#imgEx");
displayUrl.classList.add("hidden");
exitUrl.classList.add("hidden");

btn1.addEventListener( "click",()=>{
    console.log("click");
    const displayUrl = document.querySelector("#wrapper");
    const buttondissappear = document.querySelector(".menubtn")
    displayUrl.classList.remove("hidden");
    exitUrl.classList.remove("hidden");
    buttondissappear.classList.add("hidden");
});

const exitcatalog = document.querySelector("#imgEx");
exitcatalog.addEventListener( "click",()=>{
    displayUrl.classList.add("hidden");
    document.querySelector(".menubtn").classList.remove("hidden");
    exitUrl.classList.add("hidden");
});


//Catalog Apperaing
 const fooodMenuBtn = document.querySelector(".foodmenu");
 const container1 = document.querySelector('.container11');
 const container2 = document.querySelector('.container22');
 const container3 = document.querySelector('.container33');
 const container4 = document.querySelector('.container44');
 const container5 = document.querySelector('.container55');
 const container6 = document.querySelector('.container66');
 const container7 = document.querySelector('.container77');
 const container8 = document.querySelector('.container88');
 fooodMenuBtn.addEventListener( "click",()=>{
    console.log("food menu");
    const catalogMain = document.querySelector("#bodyCata");
    const catalog1 = document.querySelector("#Catalog1");
    catalogMain.classList.remove("hidden");
    catalog1.classList.remove("hidden");

    container1.classList.add('hidden');
    container2.classList.add('hidden');
    container3.classList.add('hidden');
    container4.classList.add('hidden');
    container5.classList.add('hidden');
    container6.classList.add('hidden');
    container7.classList.add('hidden');
    container8.classList.add('hidden'); 

 });