// global variable

const slides = document.querySelectorAll('.slide');
const nextbtn = document.querySelector('.next-btn');
const prevbtn = document.querySelector('.prev-btn');

const auto = true;
const intervaltime = 8000;
let slidesinterval;

// button click listner
nextbtn.addEventListener('click', (e) => {
    nextslide();
    if(auto){
// reset slide interval
        clearInterval(slidesinterval);
        slidesinterval = setInterval(nextslide, intervaltime);
    }
});

prevbtn.addEventListener('click', (e) => {
    prevslide();
    if(auto){
// reset slide interval
        clearInterval(slidesinterval);
        slidesinterval = setInterval(nextslide, intervaltime);
    }
});

// creating nextslide function
const nextslide = () => {
    // get current class
    const current = document.querySelector('.current');
   // remove current class
    current.classList.remove('current');
    // next element sliding for next slide
    if(current.nextElementSibling){
        // jump current class in next div
        current.nextElementSibling.classList.add('current');
    } else{
        // reset slide
        slides[0].classList.add('current');
    }

    setTimeout( () => current.classList.remove('current') );
};

// creating previous slide function
const prevslide = () => {
    // get current class
    const current = document.querySelector('.current');
   // remove current class
    current.classList.remove('current');
    // prev element sliding for prev slide
    if(current.previousElementSibling){
        // jump current class in prev div
        current.previousElementSibling.classList.add('current');
    } else{
        // reset slide
        slides[slides.length - 1].classList.add('current');
    }

    setTimeout( () => current.classList.remove('current') );
};

// auto slide interval time
if(auto){
    slidesinterval = setInterval(nextslide, intervaltime);
}