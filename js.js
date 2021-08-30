const slider = document.querySelectorAll('.slider');
const icon = document.querySelectorAll('.icon-img');
const testAllQuotes = document.getElementById('testimonialAllQuotes');



let sliderActive = "./img/carousel_active.png";
let sliderPassive = "./img/carousel.png";


slider[0].addEventListener('click',()=>{
    


    // change slider
    slider[0].src=sliderActive
    slider[1].src=sliderPassive
    slider[2].src=sliderPassive
    // change picture
    icon[0].style.opacity = 1 ;
    icon[1].style.opacity = 0.5 ;
    icon[2].style.opacity = 0.5 ;
    testAllQuotes.style.transition='all .6s'
    testAllQuotes.style.transform='translateY(0)'


});
slider[1].addEventListener('click',()=>{
    // change slider
    slider[0].src=sliderPassive
    slider[1].src=sliderActive
    slider[2].src=sliderPassive
    // change picture
    icon[0].style.opacity = 0.5 ;
    icon[1].style.opacity = 1 ;
    icon[2].style.opacity = 0.5 ;
     // change text
       testAllQuotes.style.transition='all .6s'
    testAllQuotes.style.transform='translateY(-180px)'
  
});
slider[2].addEventListener('click',()=>{
    // change slider
    slider[0].src=sliderPassive
    slider[1].src=sliderPassive
    slider[2].src=sliderActive
    // change picture
    icon[0].style.opacity = 0.5 ;
    icon[1].style.opacity = 0.5 ;
    icon[2].style.opacity = 1 ;
     // change text
       testAllQuotes.style.transition='all .6s'
    testAllQuotes.style.transform='translateY(-360px)'

});