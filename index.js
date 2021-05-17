const slides = document.querySelectorAll('.slide');
const container = document.querySelector(".container")

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Creating the bottom toggle buttons

for (var i=0; i<slides.length; i++){
    var div = document.createElement("div");
    document.querySelector(".slide-buttons").appendChild(div);
}

const slideButtons = document.querySelectorAll('.slide-buttons div');

// Finding the index of the slide (from the nodeList 'slides') with 'active' class

var activeSlide;
slides.forEach((slide, idx) =>{
    if(slide.className.slice(-6,)==='active'){
        activeSlide=idx
        console.log(activeSlide)
    }
})

// Adding 'active' class to the bottom toggle button corresponding to the active slide

slideButtons[activeSlide].classList.add("active")

// Adding functionality to the prev and next buttons

prev.addEventListener("click",() => {
    console.log("left-click")
    if (activeSlide===0){
        activeSlide = slides.length-1
        slideToggle()
    } else {
        activeSlide -=1
        slideToggle()
    }
})

next.addEventListener("click",() => {
    console.log("right-click")
    activeSlide +=1
    activeSlide %= slides.length
    slideToggle()
})


// Function that toggles the active class (removes 'active' class from any slide, then adds it to the slide whose index is 'activeSlide')

function slideToggle(){
    document.querySelector(".slide.active").classList.remove("active");
    slides[activeSlide].classList.add("active")
    slideButtons.forEach( (button) =>{
        if(button.className.slice(-6,)==='active'){
            button.classList.remove("active")
        }
    })

    slideButtons[activeSlide].classList.add("active")

    
}

console.log(slideButtons)

// Adding functionality to the bottom toggle buttons

slideButtons.forEach((btn,idx) => {
    btn.addEventListener('click', () =>{
        btn.classList.add('active')
        document.querySelector('.slide-buttons div.active').classList.remove("active")

        activeSlide = idx
        console.log(idx, activeSlide)
        slideToggle()
    })
})

infiniteSlide()

// Function to run the carousel infinitely unless the mouse is hovering over the container, it starts again when the mouse is out of the container 

function infiniteSlide(){
    const infinity = setInterval(()=>{
        activeSlide+=1
        activeSlide %= slides.length
        slideToggle()
    },3000)
    document.querySelector('.container').addEventListener("mouseenter",() => clearInterval(infinity)) 
    document.querySelector('.container').addEventListener("mouseleave", infiniteSlide) 

}



