const slides = document.querySelectorAll(".slide")
var counter = 0

slides.forEach((slide,index) => {
    slide.style.left = `${index*100}%`
    // slide.style.bottom = `${index*100}%` 
}
)

const goPrev = () => {
    console.log(counter,slides.length-1);

    if(counter <= 0){
        counter = slides.length-1
        slideImage()
    } else{
    counter--
    slideImage()
    }
}

const goNext = () => {
    console.log(counter,slides.length-1);
    if(counter >= (slides.length-1)){
        counter = 0
        slideImage()
    } else{
    counter++
    slideImage()
    }
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%) `
        // slide.style.transform = `translateY(+${counter * 100}%) `
    })  
}