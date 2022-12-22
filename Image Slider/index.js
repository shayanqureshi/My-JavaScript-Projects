const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prevButton");
const next = document.querySelector(".nextButton");

var counter = 0;
// console.log(slides);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

prev.addEventListener("click", () => {
    counter--;
    console.log("counter", counter)
    if (counter < 0){
        counter = 3;
    }
    slideImage();
})

next.addEventListener("click", () => {  
    counter++;
    if (counter > 3){
        counter = 0;
    }
    slideImage();
})



const slideImage = () => {
  slides.forEach((slide) => {
    // console.log(slide[0])
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
